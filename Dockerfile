# Build stage
FROM node:18-alpine AS builder

# Set build-time variables
ARG DATABASE_URL
ARG SALT_IP_ADDRESS
ARG NEXT_PUBLIC_GITHUB_TOKEN

# Set environment variables
ENV DATABASE_URL=${DATABASE_URL:-""}
ENV SALT_IP_ADDRESS=${SALT_IP_ADDRESS:-""}
ENV NEXT_PUBLIC_GITHUB_TOKEN=${NEXT_PUBLIC_GITHUB_TOKEN:-""}
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

WORKDIR /app

# Install system dependencies including OpenSSL
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    curl \
    openssl \
    openssl-dev

# Install pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Install global dependencies
RUN pnpm add -g tsup

# Copy workspace files first
COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml ./

# Copy package configurations
COPY packages/rehype-plugins/package.json ./packages/rehype-plugins/
COPY packages/remark-plugins/package.json ./packages/remark-plugins/
COPY apps/genny.dev/package.json ./apps/genny.dev/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Generate Prisma Client
COPY prisma ./prisma
RUN npx prisma generate

# Copy source files
COPY packages/rehype-plugins ./packages/rehype-plugins
COPY packages/remark-plugins ./packages/remark-plugins
COPY apps/genny.dev ./apps/genny.dev

# Build packages individually with verbose logging
RUN cd packages/rehype-plugins && \
    pnpm install tsup && \
    pnpm build || (echo "rehype-plugins build failed" && exit 1)

RUN cd packages/remark-plugins && \
    pnpm install tsup && \
    pnpm build || (echo "remark-plugins build failed" && exit 1)

# Build the main app
RUN cd apps/genny.dev && \
    pnpm build || (echo "genny.dev build failed" && exit 1)

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Install OpenSSL in production
RUN apk add --no-cache openssl

# Copy necessary files from builder
COPY --from=builder /app/apps/genny.dev/next.config.js ./
COPY --from=builder /app/apps/genny.dev/package.json ./
COPY --from=builder /app/apps/genny.dev/.next ./.next
COPY --from=builder /app/apps/genny.dev/public ./public

# Copy node_modules and built packages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/rehype-plugins/dist ./packages/rehype-plugins/dist
COPY --from=builder /app/packages/remark-plugins/dist ./packages/remark-plugins/dist

# Set production environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Start the Next.js application
CMD ["./node_modules/.bin/next", "start"]

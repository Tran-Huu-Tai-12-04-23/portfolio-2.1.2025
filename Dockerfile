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

# Install system dependencies
RUN apk add --no-cache python3 make g++ git

# Install pnpm and turbo globally
RUN npm install -g pnpm turbo

# Copy package files
COPY package.json pnpm-lock.yaml turbo.json ./
COPY packages/rehype-plugins/package.json ./packages/rehype-plugins/
COPY packages/remark-plugins/package.json ./packages/remark-plugins/
COPY apps/genny.dev/package.json ./apps/genny.dev/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Clean existing builds
RUN rm -rf apps/genny.dev/.next
RUN rm -rf packages/*/dist
RUN rm -rf node_modules/.cache

# Build the project
RUN pnpm build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/apps/genny.dev/next.config.js ./
COPY --from=builder /app/apps/genny.dev/package.json ./
COPY --from=builder /app/apps/genny.dev/.next ./.next
COPY --from=builder /app/apps/genny.dev/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Set production environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Start the production server
CMD ["node_modules/.bin/next", "start"]

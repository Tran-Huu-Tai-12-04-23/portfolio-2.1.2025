# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install essential dependencies
RUN apk add --no-cache python3 make g++ git curl openssl openssl-dev && \
    curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm && \
    pnpm add -g tsup

# Copy package files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages/*/package.json ./packages/
COPY apps/genny.dev/package.json ./apps/genny.dev/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY packages ./packages
COPY apps/genny.dev ./apps/genny.dev
COPY apps/genny.dev/prisma ./prisma/

# Generate Prisma client if schema exists
RUN if [ -f "./prisma/schema.prisma" ]; then npx prisma generate; fi

# Build packages and app
RUN cd packages/rehype-plugins && pnpm build && \
    cd ../remark-plugins && pnpm build && \
    cd ../../apps/genny.dev && pnpm build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

RUN apk add --no-cache openssl

# Copy build artifacts
COPY --from=builder /app/apps/genny.dev/next.config.js /app/apps/genny.dev/package.json ./
COPY --from=builder /app/apps/genny.dev/.next ./.next
COPY --from=builder /app/apps/genny.dev/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/*/dist ./packages/

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["./node_modules/.bin/next", "start"]

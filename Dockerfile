

# Add ARG instructions for build-time variables
ARG DATABASE_URL
ARG SALT_IP_ADDRESS
ARG NEXT_PUBLIC_GITHUB_TOKEN
FROM node:18-alpine

# Convert ARG to ENV
ENV DATABASE_URL=$DATABASE_URL
ENV SALT_IP_ADDRESS=$SALT_IP_ADDRESS
ENV NEXT_PUBLIC_GITHUB_TOKEN=$NEXT_PUBLIC_GITHUB_TOKEN
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++ git

# Copy package files first
COPY package.json pnpm-lock.yaml turbo.json ./
COPY packages/rehype-plugins/package.json ./packages/rehype-plugins/
COPY packages/remark-plugins/package.json ./packages/remark-plugins/
COPY apps/genny.dev/package.json ./apps/genny.dev/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Clean and rebuild
RUN rm -rf apps/genny.dev/.next
RUN rm -rf packages/*/dist
RUN rm -rf node_modules/.cache

# Build the project
RUN pnpm build

# Change to the app directory
WORKDIR /app/apps/genny.dev

EXPOSE 3000

# Start the production server
CMD ["pnpm", "start"]

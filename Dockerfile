# Use Node.js LTS version
FROM node:18-alpine

# Add ARG instructions for build-time variables
ARG DATABASE_URL
ARG SALT_IP_ADDRESS
ARG NEXT_PUBLIC_GITHUB_TOKEN

# Convert ARG to ENV
ENV DATABASE_URL=$DATABASE_URL
ENV SALT_IP_ADDRESS=$SALT_IP_ADDRESS
ENV NEXT_PUBLIC_GITHUB_TOKEN=$NEXT_PUBLIC_GITHUB_TOKEN

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files first (for better caching)
COPY package.json pnpm-lock.yaml turbo.json ./
COPY packages/*/package.json ./packages/
COPY apps/*/package.json ./apps/

# Install pnpm
RUN npm install -g pnpm

# Clean install dependencies
RUN pnpm install --frozen-lockfile

# Now copy the rest of the source code
COPY . .

# Remove any platform-specific node_modules
RUN rm -rf packages/*/node_modules
RUN rm -rf apps/*/node_modules
RUN rm -rf node_modules

# Reinstall dependencies for the current platform
RUN pnpm install --frozen-lockfile

# Build packages individually to handle errors better
RUN cd packages/rehype-plugins && pnpm install && pnpm build || true
RUN cd packages/remark-plugins && pnpm install && pnpm build || true

# Expose the port your app runs on
EXPOSE 3000

# Start the production server for the main app
CMD ["pnpm", "--filter", "genny.dev", "start"]

# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV DATABASE_URL="mongodb+srv://huutai:tai2k300@cluster0.xbemtzm.mongodb.net/my-porfolio?retryWrites=true&w=majority"
ENV SALT_IP_ADDRESS="super-secret"
ENV NEXT_PUBLIC_GITHUB_TOKEN="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"
ENV NEXT_PUBLIC_VERCEL_ENV="export"

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]

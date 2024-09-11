# Dockerfile
FROM oven/bun:latest

# Set working directory
WORKDIR /usr/src/app

# Set environment variable (default to production)
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Install dependencies using Bun
COPY bun.lockb package.json ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Nuxt app using Bun
RUN bun run build

# Expose port 3000
EXPOSE 3000

# Start the Nuxt app using Bun
CMD ["bun", "run", "start"]
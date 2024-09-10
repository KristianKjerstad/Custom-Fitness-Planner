# Dockerfile for Next.js app
FROM node:18-alpine

WORKDIR /app

# Install dependencies
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy rest of the application code
COPY . .

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "run", "dev"]



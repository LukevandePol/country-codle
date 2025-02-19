# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the full project to the container
COPY . .

# Build the Angular project
RUN npx nx build country-codle --prod

# Stage 2: Create a lightweight Nginx server to serve Angular app
FROM nginx:alpine

# Copy built Angular files from builder stage
COPY --from=builder /app/dist/apps/country-codle/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
# Base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /angular-monorepo

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire workspace
COPY . .

# Build the Angular application (modify according to your monorepo tool)
RUN npx nx build country-codle

# Stage 2 - Serve the application using Nginx
FROM nginx:alpine
COPY --from=builder /angular-monorepo/dist/apps/country-codle/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

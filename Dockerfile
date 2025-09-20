# --- Stage 1: Build the Angular application ---
FROM node:18 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# The --configuration production flag uses your environment.prod.ts
RUN npm run build --configuration production

# --- Stage 2: Serve the application from Nginx ---
FROM nginx:1.23-alpine
# Copy the built assets from the 'build' stage
COPY --from=build /usr/src/app/dist/ecommerce-frontend /usr/share/nginx/html
# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 8080
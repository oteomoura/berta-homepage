# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
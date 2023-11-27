# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port that your application runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "start:dev"]
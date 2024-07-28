# Use the official Node.js image as the base image
FROM node:18

RUN apt-get update -y && apt-get upgrade -y 

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 4000

# Define the environment variables
ENV MONGO_URL=mongodb://mongodb:27017/your-db-name
ENV REDIS_URL=redis://redis:6379

# Start the application
CMD ["npm", "run", "dev"]

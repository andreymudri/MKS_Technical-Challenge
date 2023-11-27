## Nestjs backend challenge for MKS

This is my first time using TypeORM.

## Notable technologies used

- Type ORM
- PostgreSQL Database
- Typescript
- Nestjs
- Passport
- Docker
- Swagger

## Routes

```bash
   POST
- /auth/login
  POST
- /auth/register
  GET/POST
- /movies
  GET/DELETE/PUT
- /movies/:id
```

## Usage

To run the application, follow these steps:

1. Clone the repository by running

```bash
git clone https://github.com/andreymudri/MKS_Technical-Challenge.git
```

2. Install the dependencies by running

```bash
cd MKS_Technical-Challenge && npm install
```

3. Start the application by running

```bash
npm run start:dev
```

Alternatively you can use Docker

# Using the Docker Image

This tutorial will guide you through the process of using the Docker image you've pushed to Docker Hub.

## Prerequisites

Make sure you have Docker installed on your machine. If not, you can download and install it from the official Docker website: [Get Docker](https://docs.docker.com/get-docker/)

## Docker Compose

```bash
docker compose build
docker compose up

```

Access the Application
Once the container is running, you can access your application by opening a web browser and navigating to http://localhost:3000.

Stop and Remove the Container
When you're done using the application, you can stop and remove the Docker container with the following commands:

```bash

docker stop container_id
docker rm container_id
```

# Replace container_id with the actual container ID or name. You can find the container ID by running docker ps or docker ps -a to list all containers.

1. Clone the repository by running
2. ```bash
   git clone https://github.com/andreymudri/MKS_Technical-Challenge.git
   ```

````
3. Install the dependencies by running
```bash
cd MKS_Technical-Challenge && npm install
````

5. Start the application by running

```bash
npm run dev
```

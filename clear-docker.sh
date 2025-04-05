#!/bin/bash

#Clear docker containers
echo "Clearing all docker containers..."
docker rm -f $(docker ps -aq)
#Clear docker images
echo "Clearing all docker images..."
docker rmi -f $(docker images -aq)
#Clear docker volumes
echo "Clearing all docker volumes..."
docker volume rm -f $(docker volume ls -q)
#Clear docker networks
echo "Clearing all docker networks..."
docker network rm -f $(docker network ls -q)
#Clear docker build cache
echo "Clearing all docker build cache..."
docker builder prune -f
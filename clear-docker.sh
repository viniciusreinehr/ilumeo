#!/bin/bash

toclear="ilumeo"

#Clear docker containers
echo "Clearing all docker containers..."
containers=$(docker ps | grep $toclear | awk '{print $1}')
if [ -z "$containers" ]; then
    echo "No containers to remove."
else
    docker rm -f $containers
fi
#Clear docker images
echo "Clearing all docker images..."
images=$(docker images | grep $toclear | awk '{print $3}')
if [ -z "$images" ]; then
    echo "No images to remove."
else
    docker rmi -f $images
fi
#Clear docker volumes
echo "Clearing all docker volumes..."
volumes=$(docker volume ls | grep $toclear | awk '{print $2}')
if [ -z "$volumes" ]; then
    echo "No volumes to remove."
else
    docker volume rm -f $volumes
fi
#Clear docker networks
echo "Clearing all docker networks..."
networks=$(docker network ls | grep $toclear | awk '{print $2}')
if [ -z "$networks" ]; then
    echo "No networks to remove."
else
    docker network rm -f $networks
fi
#Clear docker build cache
echo "Clearing all docker build cache..."
docker builder prune -f
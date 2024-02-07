RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color


echo "${GREEN} Stopping the container noteapp-frontend ${NC}"
sudo docker stop noteapp-frontend;

echo "${RED} Removing the container noteapp-frontend ${NC}"
sudo docker rm noteapp-frontend;

echo "${YELLOW} Up the container noteapp-frontend ${NC}"
sudo docker-compose up -d
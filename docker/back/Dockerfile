FROM node:22

WORKDIR /app
COPY ../../back/package*.json ./
RUN npm install
COPY ../../back/. .
EXPOSE 8081
CMD npm run dev
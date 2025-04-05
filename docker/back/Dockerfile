FROM node:20

WORKDIR /app
COPY ../../data/case_tech_lead.sql ./
COPY ../../back/package*.json ./
RUN npm install
COPY ../../back/. .
RUN npx prisma generate
EXPOSE 8081
CMD npm run dev
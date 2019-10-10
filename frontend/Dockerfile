FROM node:alpine

WORKDIR /usr/apps/academiaapp/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
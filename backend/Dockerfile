FROM node:alpine

WORKDIR /usr/apps/academiaapp/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
FROM node:14

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm","run","start:dev"]   


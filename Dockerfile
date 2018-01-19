FROM node:carbon

WORKDIR /dokku/ui

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

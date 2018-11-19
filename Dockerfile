FROM node:10

WORKDIR /usr/src/app

COPY package.json package.json
COPY . .

RUN yarn install

EXPOSE 5000
CMD [ "npm", "start" ]
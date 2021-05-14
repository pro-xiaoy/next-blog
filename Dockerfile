FROM node:12
# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 9527

CMD [ "yarn", "start" ]

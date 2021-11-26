FROM node:14-alpine3.14
# create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./

RUN npm install

# copy rest of the app excluding node_modules
COPY . /app

RUN npm run "build:local"

EXPOSE 3000

CMD ["npm", "start"]

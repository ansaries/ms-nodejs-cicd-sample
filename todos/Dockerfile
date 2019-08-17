FROM node:8

COPY . /todos

WORKDIR /todos

RUN npm install -g nodemon
RUN npm install -g ts-node
RUN npm config set registry https://registry.npmjs.org

RUN npm install
RUN npm run build

ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz



EXPOSE 3000


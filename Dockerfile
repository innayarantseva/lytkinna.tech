# based on https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

# node app
FROM node:alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

# nginx serves static built on the previous step
FROM nginx:alpine
# copy static files into docker
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# app should be exposed on 8080 on production VM
EXPOSE 8080
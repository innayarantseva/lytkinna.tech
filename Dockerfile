# Base layer
# maybe use alpine?
FROM nginx
# copy static files into docker
COPY ./public /usr/share/nginx/html

# app should be exposed on 8080 on production VM
EXPOSE 8080
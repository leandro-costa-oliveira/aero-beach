FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY ./infra/aero-beach-fe.conf /etc/nginx/conf.d/default.conf

COPY dist .

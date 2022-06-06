FROM nginxinc/nginx-unprivileged:latest

# copy static content to nginx
COPY ./build /usr/share/nginx/html

# copy custom nginx config
COPY ./nginx-config/nginx.conf /etc/nginx/conf.d/default.conf

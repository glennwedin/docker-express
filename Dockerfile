# Node version boron (node version 6 LTS)
FROM node:boron

#Use pm2 for a real node environment with crash handling and graceful shutdown
RUN npm install pm2 -g

# Create app directory
RUN mkdir -p /var/www/appdir
WORKDIR /var/www/appdir

# Install app dependencies
COPY package.json /var/www/appdir
#install deps
RUN npm install --production

# Bundle app source
COPY . /var/www/appdir

EXPOSE 3000
CMD [ "pm2-docker", "process.yml", "--env", "prod" ]

# docker-express

Pretty simple starter kit for express.js using pm2 in docker container.

### Start developement
Developement starts using nodemon.

```
npm run dev
```

### Start qa
Q/A starts the app with pm2-docker using process.yml file.

```
npm run qa
```


### Build docker image
Here we build the docker image into a container and tags it with a name.
```
docker build -t dockerexpress .
```

### Start docker container
Here we start the docker container we buildt above and maps the hosts (our server) port 3000 to the exposed port in our dockerfile.
The express app must be configured to listen to the exposed port.

```
docker run -p 3000:3000 --name dockerexpress dockerexpress
```

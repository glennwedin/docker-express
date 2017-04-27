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


Build docker image
```
docker build -t dockerExpress .
```

Start docker container
```
docker run -p 3000:3000 --name dockerExpress dockerExpress
```

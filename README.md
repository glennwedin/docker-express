# docker-express

Start developement
```
pm2-docker start process.yml --env dev
```

Build docker image
```
docker build -t dockerExpress .
```

Start docker container
```
docker run -p 3000:3000 --name dockerExpress dockerExpress
```

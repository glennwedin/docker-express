# docker-express

Start developement
```
npm run dev
```

Start qa/developement
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

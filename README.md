# ui-gartic-phone

GarticPhone(1) front end 

## Docker

- Build 

```sh
docker build -t ui-gartic .
```

- Run

```sh
docker run --rm -d -p 8080:80 ui-gartic
```

- Stop

```sh
docker stop <container-id>
```

## Angular

- Run   

```sh
ng serve --open
```
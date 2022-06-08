# lytkinna.tech
A personal website


## Docker
This site is served via Docker. To successfully start it:

1. Build a Docker container with a tag "lytkinna.tech":
```
docker build -t lytkinna.tech .
```

2. Run the built container:
```
docker run -p 80:80 -d lytkinna.tech
```

You can check all the running containers with the following command:
```
docker ps
```

 To stop the running container:
 ```
 docker stop -t 0 <container_id>
 ```
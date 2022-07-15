# lytkinna.tech

A personal website

## How to build and start the project locally

```bash
git clone https://github.com/innayarantseva/lytkinna.tech.git
cd lytkinna.tech
npm install # or npm ci, both are good since all the packages versions are fixed
npm run start:dev
```

To create a production-ready bundle:

```bash
npm run build
```

Tests are still to be implemented... Once they are ready, you can use the following to start them:

```bash
npm run test
```

## Docker

This site is served via Docker. To start it locally:

0. You should have Docker installed on your local machine. Please see [these](https://docs.docker.com/engine/install/) instructions to get it installed.

1. Build a Docker container with a specific tag (I'm using "lytkinna.tech"):

```bash
docker build -t lytkinna.tech .
```

2. Run the built image:

```bash
docker run -p 8080:8080 -d lytkinna.tech
```

This will run the built image on port 8080: [http://localhost:8080](http://localhost:8080)

You can check all the running containers with the following command:

```bash
docker ps
```

To stop the running container:

```bash
docker stop -t 0 <container_id>
# container ID is shown in the first column of the corresponding container after running `docker ps`
```

## Issues and contributions

I am really looking forward for any suggestions and ideas you could come up with! So please feel free to open new issues [here](https://github.com/innayarantseva/lytkinna.tech/issues) and to open you pull requests linked to any opened issue.

Thanks for considering helping me :3

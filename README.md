## Running with Docker

The application was setup to be ran from a docker-compose.yml file.

To run it that way, you just need to have `docker` and `docker-compose` installed and run the following command in the root folder of this repository (where the docker-compose.yml file is located):

```
docker-compose up -d
```

**Important Notes**
* The back-end application will run on **PORT 3000** ;
* The MongoDb database will run on **PORT 27017** ;
* Make sure all these ports are available before running the above command.

## Using the application

* upload your logs using insomnia
* the insomnia json will be in the project

![insomnia](https://i.imgur.com/sXirDkg.jpg)

* after the log are processed execute the following docker command
* the command will copy the reports folder to host computer

```
docker cp desafio-melhor-envio-node:/app/reports <your_path_to_save>

example:

docker cp desafio-melhor-envio-node:/app/reports c:/users/mvabf/Documents
```

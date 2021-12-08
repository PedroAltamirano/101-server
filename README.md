
# 101 server

Backend creado con node + expess, para manejar peticiones api.
Se usa multer + firebase store para guardar imágenes.
Se usa sequelize + mysql para guardar los datos.


## Installation

Una ves clonado el proyecto, se instalan las dependencias

```bash
$ npm install
```

Para ejecutar se corre
```bash
$ npm run start
```
ó si se tiene instalado
```bash
$ nodemon server
```
## Environment Variables

Este proyecto usa una base de datos mysql remota, por ende para correr este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env, con la informacion de conneccion con su db

`DB_HOST`
`DB_NAME`
`DB_USER`
`DB_PASSW`

Las tablas se crearan automaticamente por parte de sequelizer
## API Reference

### Géneros
```http
  GET /api/genres
```

#### Actores

```http
  GET /api/actors
```

```http
  POST /api/actor
```
```http
  PUT /api/actor/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Nobre del actor |
| `age`     | `number` | **Required**. Edad |
| `img`     | `string` | **Required if id**. Url de firestore |
| `image`   | `file`   | **Required if no id**. Imagen a subir |

#### Péliculas

```http
  GET /api/movies
```

```http
  POST /api/movie
```
```http
  PUT /api/movie/${id}
```

| Parameter     | Type     | Description                |
| :--------     | :------- | :------------------------- |
| `name`        | `string` | **Required**. Nobre de la pelicula |
| `duration`    | `number` | **Required**. Duración |
| `genre_id`    | `number` | **Required**. Género |
| `description` | `string` | **Required**. Sinopsis |
| `actors_id`   | `string` | **Required**. Array de id de actores (1,3) |

## Deployment

Actual mente el proyecto esta corriendo en vercel: [101 server](https://101-server.vercel.app/)
por lo que se implemento firestore
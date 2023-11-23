# API RESTful con Node.js y Express

Breve descripción del proyecto.

## Requisitos

- Node.js
- PostgreSQL

## Configuración

1. Clona el repositorio: `https://github.com/lace04/Api-postgres-todo.git`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=todo
   ```

## Uso

1. Inicia el servidor: `npm start` o `npm run dev` (con nodemon)
2. Accede a la aplicación en tu navegador: `http://localhost:3000`

## Estructura del Proyecto

Este es un proyecto de Node.js con Express y PostgreSQL. Para crear una lista de tareas, se debe crear una base de datos en PostgreSQL con el nombre `todo` y ejecutar el script `todo.sql` que se encuentra en la carpeta `database`.

```bash
├── database
│   └── todo.sql
├── src
│   ├── controllers
│   │   └── todo.controller.js
│   ├── models
│   │   └── todo.model.js
│   ├── routes
│   │   └── todo.routes.js
│   ├── app.js
│   ├── index.js
│   ├── db.sql
│   └── config.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
3. Realiza los cambios necesarios y realiza commits: `git commit -m "Descripción de los cambios"`
4. Sube los cambios a tu repositorio: `git push origin mi-contribucion`
5. Abre un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más información, por favor revisa el archivo [LICENSE](LICENSE).

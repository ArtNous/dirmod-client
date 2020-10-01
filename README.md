Esta es la aplicación web que mostrará las actuales cotizaciones del peso argentino con respecto al Dolar, al Euro y al Real.

Esta desarrollada mediante [Create React App](https://github.com/facebook/create-react-app).

## Comenzando

Clona este repositorio para comenzar a trabajar.

### Instalación de dependencias

Ejecuta `npm install` para comenzar la instalación de las dependencias.

### Variables de entorno **IMPORTANTE**

Debes crear un archivo en la raiz del directorio de la app llamado `.env` y en el debes crear la variable `REACT_APP_SERVICE_URL`, la cual debe tener como valor la url del dominio del servicio API que solicita las cotizaciones.

**Por ejemplo**: `REACT_APP_SERVICE_URL=http://localhost:8000`

### Desarrollo

Para ejecutar la prueba en modo desarrollo ejecuta en la consola el comando `npm run start`

### Build

Para comenzar el build de la aplicación ejecuta `npm run build`.

### Ya puedes usar la app
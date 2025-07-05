// 1. Importamos las librerías que acabamos de instalar
const express = require('express');
const cors = require('cors');

// 2. Creamos una instancia de express
const app = express();

// 3. Definimos el puerto en el que se ejecutará nuestro servidor
// Usamos el 5000 para no chocar con el puerto 3000 que usará React
const PORT = 5000;

// 4. Middlewares: Son funciones que se ejecutan entre la petición y la respuesta.
// Usamos cors() para permitir peticiones desde nuestro frontend
app.use(cors());

// 5. Definimos una ruta de prueba
// Cuando alguien haga una petición GET a la raíz ('/'), responderemos con un JSON.
app.get('/', (req, res) => {
    res.json({ message: '¡Hola desde el servidor!' });
});

// 6. Ponemos el servidor a "escuchar" en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
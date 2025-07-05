// 1. Importamos los Hooks 'useState' y 'useEffect' desde React
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 2. Declaramos una nueva variable de estado llamada 'mensaje'
  // 'mensaje' guardará el string que recibamos del servidor.
  // 'setMensaje' es la función que usaremos para actualizar 'mensaje'.
  // El valor inicial es un string vacío ''.
  const [mensaje, setMensaje] = useState('');

  // 3. Usamos el Hook 'useEffect' para ejecutar código cuando el componente se monte
  useEffect(() => {
    // 4. Hacemos la petición 'fetch' a nuestro backend
    // La URL debe ser la dirección completa de nuestro servidor.
    fetch('http://localhost:5000/')
      .then(res => res.json()) // 5. Cuando recibimos respuesta, la convertimos a JSON
      .then(data => setMensaje(data.message)) // 6. Tomamos el dato 'message' del JSON y actualizamos nuestro estado
      .catch(err => console.error("Error al conectar con el servidor:", err)); // Manejo de errores
  }, []); // 7. El array vacío '[]' significa que este efecto se ejecutará solo una vez, cuando el componente se carga por primera vez.

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda por Catálogo</h1>
        {/* 8. Mostramos el mensaje del estado. Al principio será '', y se actualizará cuando llegue la respuesta del servidor. */}
        <p>{mensaje || "Conectando al servidor..."}</p>
      </header>
    </div>
  );
}

export default App;
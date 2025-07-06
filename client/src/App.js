import React from 'react';
import './App.css'; // Estilos globales

// Importamos nuestros nuevos componentes
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Aquí es donde, en el futuro, el router mostrará la página correcta */}
        <HomePage />
      </main>
      {/* <Footer /> */} {/* Dejamos el espacio para el futuro Footer */}
    </div>
  );
}

export default App;
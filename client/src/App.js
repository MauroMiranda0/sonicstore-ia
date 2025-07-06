import React from 'react';
// 1. Importamos Routes y Route
import { Routes, Route } from 'react-router-dom';

import './App.css';

// Componentes Reutilizables
import Header from './components/header/Header';
import Footer from './components/footer/Footer'; // Futuro
// Páginas
import HomePage from './pages/homepage/HomePage';
import CatalogosPage from './pages/CatalogosPage';
import ComoComprarPage from './pages/ComoComprarPage';
// (Añadir aquí los imports para las otras páginas que creaste)
import NosotrosPage from './pages/NosotrosPage'; 
import ContactoPage from './pages/ContactoPage';
import MiCuentaPage from './pages/MiCuentaPage';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* 2. Configuramos el contenedor de rutas */}
        <Routes>
          {/* 3. Definimos cada ruta */}
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogos" element={<CatalogosPage />} />
          <Route path="/como-comprar" element={<ComoComprarPage />} />
          {/* (Añade aquí las otras rutas) */}
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/mi-cuenta" element={<MiCuentaPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
        </Routes>
      </main>
      <Footer /> {/* 2. Añadir el Footer aquí */}
    </div>
  );
}

export default App;
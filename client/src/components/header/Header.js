// 1. Importamos Link
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        {/* 2. Reemplazamos <a> con <Link> y 'href' con 'to' */}
        <Link to="/">MiTienda</Link>
      </div>
      <nav className="navigation">
        <Link to="/">Inicio</Link>
        <Link to="/catalogos">Catálogos</Link>
        <Link to="/como-comprar">Cómo Comprar</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <div className="account-section">
        <Link to="/mi-cuenta">Mi Cuenta</Link>
      </div>
    </header>
  );
};

export default Header;
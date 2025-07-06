import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <a href="/">MiTienda</a>
      </div>
      <nav className="navigation">
        <a href="/">Inicio</a>
        <a href="/catalogos">Catálogos</a>
        <a href="/como-comprar">Cómo Comprar</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
      <div className="account-section">
        <a href="/mi-cuenta">Mi Cuenta</a>
      </div>
    </header>
  );
};

export default Header;
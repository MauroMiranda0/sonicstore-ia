import React from 'react';
import './HomePage.css';

// Componentes para las secciones de la página de inicio
const Banner = () => (
  <section className="banner">
    <div className="banner-content">
      <h1>Estilo y Variedad Directo a tu Puerta</h1>
      <p>Descubre las últimas colecciones de tus marcas favoritas.</p>
      <button className="cta-button">Explora Catálogos</button>
    </div>
  </section>
);

const AccesosRapidos = () => (
  <section className="accesos-rapidos">
    <h2>Nuestras Marcas Destacadas</h2>
    <div className="accesos-grid">
      <div className="acceso-item">Marca A</div>
      <div className="acceso-item">Marca B</div>
      <div className="acceso-item">Marca C</div>
      <div className="acceso-item">Marca D</div>
    </div>
  </section>
);

const Beneficios = () => (
  <section className="beneficios">
    <div className="beneficio-item">
      <h3>🛍️ Gran Variedad</h3>
      <p>Accede a cientos de productos de múltiples catálogos.</p>
    </div>
    <div className="beneficio-item">
      <h3>💳 Financiamiento Flexible</h3>
      <p>Paga a tu ritmo con opciones como Aplazo y PayPal.</p>
    </div>
    <div className="beneficio-item">
      <h3>🚚 Entrega Confiable</h3>
      <p>Recibe tus pedidos en la puerta de tu casa vía Estafeta.</p>
    </div>
  </section>
);


// Componente principal de la página de inicio
const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <AccesosRapidos />
      <Beneficios />
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación interna
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/catalogos">Catálogos</Link></li>
            <li><Link to="/como-comprar">Cómo Comprar</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacidad">Política de Privacidad</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            {/* Estos enlaces deberían apuntar a tus perfiles reales */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WA</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {currentYear} MiTienda | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
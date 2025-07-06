import React from 'react';
import './CatalogoCard.css';

const CatalogoCard = ({ catalogo }) => {
  // Extraemos las propiedades del objeto 'catalogo' para usarlo más fácil
  const { portada, marca, temporada, url } = catalogo;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="catalogo-card">
      <img src={portada} alt={`Portada del catálogo ${marca} ${temporada}`} className="catalogo-portada" />
      <div className="catalogo-info">
        <h3>{marca}</h3>
        <p>{temporada}</p>
      </div>
    </a>
  );
};

export default CatalogoCard;
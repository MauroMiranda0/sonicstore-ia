import React, { useState, useMemo } from 'react';

// Importamos los datos y el componente Card
import { catalogosData, categorias, tiposCliente } from '../data/mockCatalogos';
import CatalogoCard from '../components/catalogocard/CatalogoCard';
import './CatalogosPage.css';

const CatalogosPage = () => {
  // 1. Estados para los filtros
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [filtroTipoCliente, setFiltroTipoCliente] = useState('todos');

  // 2. Lógica para filtrar los catálogos
  const catalogosFiltrados = useMemo(() => {
    return catalogosData.filter(catalogo => {
      const pasaFiltroCategoria = filtroCategoria === 'todos' || catalogo.categoria === filtroCategoria;
      const pasaFiltroTipoCliente = filtroTipoCliente === 'todos' || catalogo.tipoCliente === filtroTipoCliente;
      return pasaFiltroCategoria && pasaFiltroTipoCliente;
    });
  }, [filtroCategoria, filtroTipoCliente]); // 3. Dependencias del useMemo

  return (
    <div className="catalogos-page">
      <h1>Nuestros Catálogos</h1>
      
      {/* 4. Controles de Filtro */}
      <div className="filtros-container">
        <div className="filtro-grupo">
          <label htmlFor="categoria-select">Categoría:</label>
          <select id="categoria-select" onChange={(e) => setFiltroCategoria(e.target.value)} value={filtroCategoria}>
            <option value="todos">Todas</option>
            {categorias.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
          </select>
        </div>
        
        <div className="filtro-grupo">
          <label htmlFor="cliente-select">Para:</label>
          <select id="cliente-select" onChange={(e) => setFiltroTipoCliente(e.target.value)} value={filtroTipoCliente}>
            <option value="todos">Todos</option>
            {tiposCliente.map(tipo => <option key={tipo} value={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>)}
          </select>
        </div>
      </div>

      {/* 5. Rejilla de Catálogos */}
      <div className="catalogos-grid">
        {catalogosFiltrados.map(catalogo => (
          <CatalogoCard key={catalogo.id} catalogo={catalogo} />
        ))}
      </div>
    </div>
  );
};

export default CatalogosPage;
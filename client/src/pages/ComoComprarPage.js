import React from 'react';
import './ComoComprarPage.css'; // Importamos el CSS

const ComoComprarPage = () => {
  return (
    <div className="como-comprar-page">
      <h1>¿Cómo Comprar? Es muy Fácil</h1>
      <ol className="proceso-pasos">
        <li className="paso">
          <div className="paso-numero">1</div>
          <div className="paso-contenido">
            <h3>Consulta el Catálogo</h3>
            <p>Explora nuestros catálogos digitales y elige los productos que más te gusten.</p>
          </div>
        </li>
        <li className="paso">
          <div className="paso-numero">2</div>
          <div className="paso-contenido">
            <h3>Anota el Código</h3>
            <p>Cada producto tiene un código único. Anótalo junto con la talla y color que necesitas.</p>
          </div>
        </li>
        <li className="paso">
          <div className="paso-numero">3</div>
          <div className="paso-contenido">
            <h3>Contáctanos</h3>
            <p>Llena nuestro formulario de pedido o envíanos un WhatsApp con los códigos de los productos.</p>
          </div>
        </li>
        <li className="paso">
          <div className="paso-numero">4</div>
          <div className="paso-contenido">
            <h3>Confirmación y Pago</h3>
            <p>Confirmaremos la disponibilidad, te enviaremos el total y podrás realizar tu pago de forma segura.</p>
          </div>
        </li>
      </ol>

      <div className="info-adicional">
        <h2>Métodos de Pago y Envío</h2>
        <div className="info-iconos">
            <div className="info-item">
                <span>💳</span>
                <p>PayPal / Aplazo</p>
            </div>
            <div className="info-item">
                <span>🏦</span>
                <p>Depósito / Transferencia</p>
            </div>
            <div className="info-item">
                <span>🚚</span>
                <p>Envío por Estafeta</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ComoComprarPage;
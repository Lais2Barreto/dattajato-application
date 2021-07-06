import React from 'react';
import broken from '../assets/img/broken.png';

const NotFound = () => 
  <div>
    <h1 className="not-found-titulo">Not Found</h1>
      <p className="not-found-p">O servidor não pode encontrar o recurso solicitado.</p>
      <img src={broken} alt="desenho de robô segurando coração partido" />
  </div>;

  export default NotFound;
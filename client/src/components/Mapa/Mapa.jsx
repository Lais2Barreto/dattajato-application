import React, { Component } from 'react';
import "./estilo.css";

class Mapa extends Component {
  render() { 
    return (  
      <section className="Mapa">
        <div className="Mapa-principal">
          <h3>Onde estamos localizados</h3>
          <p>Nosso estabelecimento está localizado no centro da cidade.</p>
          <div className="mapa-conteudo">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.097952294883!2d-34.881865373661064!3d-7.120322933316536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7e267019ac3%3A0x6dca99b5716f522f!2sCentro%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1625498962902!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              title="mapa-local"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section> 
    );
  }
}
 
export default Mapa;
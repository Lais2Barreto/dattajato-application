import React, { Component } from 'react';
import "./estilo.css";

class CardAgenda extends Component {
  
  render() { 
    return (   
      <section className="card-agenda">
        <header className="card-agenda_cabecalho">
          <h3 className="card-agenda_titulo">{this.props.dataSelecionada}</h3>
        </header>
        <p className="card-agenda_texto">{this.props.horaSelecionada + ":" + this.props.minSelecionado}</p>
      </section>
    );
  }
}
 
export default CardAgenda;
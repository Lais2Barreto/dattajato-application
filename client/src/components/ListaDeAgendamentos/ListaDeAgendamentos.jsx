import React, { Component } from 'react';
import CardAgenda from '../CardAgenda';
import "./estilo.css";

class ListaDeAgendamentos extends Component {
  
  render() { 
    return (  
      <section className="agendamentos">
        <h2 className="App-subtitulo">Meus Agendamentos</h2>
        <ul className="lista-agendamentos">
          {this.props.agendamentos.map((agendamento, index) => {
            return (
              <li className="lista-agendamentos-itens" key={index}>
                <button type="button" className="btn-close">X</button>
                <h3 className="App-sub-subtitulo">Agendamento</h3>
                <CardAgenda dataSelecionada={agendamento.dataSelecionada} horaSelecionada={agendamento.horaSelecionada} minSelecionado={agendamento.minSelecionado}/>
              </li>  
            );
          })}
        </ul>
      </section>
    );
  }
}
 
export default ListaDeAgendamentos;
import React, { Component } from 'react';
import Header from '../../components/Header';
import FormularioAgendamento from "../../components/FormularioAgendamento";
import ListaDeAgendamentos from "../../components/ListaDeAgendamentos";
import Footer from '../../components/Footer';
import '../../assets/css/App.css';



class Agendar extends Component {

  constructor () {     
    super();
    this.state = {
      agendamentos: []
    };
  }

  criarAgendamento(dataSelecionada, horaSelecionada, minSelecionado) {
    console.log(`Um novo agendamento foi criado: ` + dataSelecionada + ` às ` + horaSelecionada + ":" + minSelecionado)
    const novoAgendamento = {dataSelecionada, horaSelecionada, minSelecionado};   //cria o objeto
    const novoArrayAgendamentos = [...this.state.agendamentos, novoAgendamento]     //cria novo array
    const novoEstado = {                                          //para fazer um novo estado
      agendamentos:novoArrayAgendamentos      
    }
    this.setState(novoEstado)                                   //usa o estado para atualizar e renderizar
  }
  
  render() {
    return (
      <div className="App">
        <Header /> 
        <h2 className="App-subtitulo">Agende abaixo a lavagem do seu carro na DattaJato!</h2>
        <FormularioAgendamento criarAgendamento={this.criarAgendamento.bind(this)}/>
        <ListaDeAgendamentos agendamentos={this.state.agendamentos}/>
        <Footer />
      </div>
    ); 
  }  
}


export default Agendar;
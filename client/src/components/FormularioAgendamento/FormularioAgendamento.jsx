import React, { Component } from 'react';
import "./estilo.css";

class FormularioAgendamento extends Component {
  constructor (props) {         
    super(props);
    this.dataSelecionada ="";
    this.horaSelecionada ="";
    this.minSelecionado ="";
  }
  
  _handlerData(e){
    e.stopPropagation();
    this.dataSelecionada = e.target.value; 
    console.log(this.dataSelecionada);
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    dd = dd + 3;
    if(dd > 30){
      dd = dd - 30;
      mm = mm+1;
    }
    if(mm > 12){
      mm = 1;
      yyyy = yyyy + 1;
    }
    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dtAgenda").setAttribute("min", today);
    if(this.dataSelecionada < today) {
      today = dd + '/' + mm + '/' + yyyy;
      let div = document.getElementById("divDtFutura");
      div.innerText = "Por favor, agende a partir de: " + today;
    }
  }

  _handlerHora(e) {
    e.stopPropagation();
    this.horaSelecionada = e.target.value; 
    if(this.horaSelecionada < 10){
      this.horaSelecionada = '0' + this.horaSelecionada;
    }
    let appm = document.getElementById("appm");
    if(this.horaSelecionada > 15){
      appm.setAttribute("max", 0)
    }
    console.log(this.horaSelecionada);
  }

  _handlerMinuto(e) {
    e.stopPropagation();
    this.minSelecionado = e.target.value;
    if(this.minSelecionado === '0') {
      this.minSelecionado = '00'
    }
    console.log(this.minSelecionado);
  }

  _adicionarAgendamento(e) {
    e.preventDefault(); 
    e.stopPropagation(); 
    this.props.criarAgendamento(this.dataSelecionada, this.horaSelecionada, this.minSelecionado);
    alert(`Um novo agendamento foi criado: ` + this.dataSelecionada + ` às ` + this.horaSelecionada + ":" + this.minSelecionado);
  }
 

  render() {
    return(
      <form method="post" className="form-agenda" onSubmit={this._adicionarAgendamento.bind(this)}>
        <div className="field-small">
          <label className="form-label">Agendar para o dia: </label>
          <input type="date" name="data" id="dtAgenda" min="{}" required onChange={this._handlerData.bind(this)}/>   
          <div id="divDtFutura">
            <p>
              <span>
                <small>
                  Atenção, os agendamentos são feitos até 72h antes do serviço.
                </small>
              </span>
            </p>
          </div>
          <div className="horario">
            <label className="form-label">Escolha o horário do serviço: </label>
            <input type="number" className="selecao-horario" name="appt" id="appt" min="09" max="16" required onChange={this._handlerHora.bind(this)}/>
            <span> : </span>
            <input type="number" className="selecao-horario" name="appm" id="appm" min="00" max="50" step="10" required onChange={this._handlerMinuto.bind(this)}/>
          </div>  
          <small>Horário de atendimento das 9h às 16h</small>
          <button className="form-agenda_input form-agenda_submit">Agendar</button>
        </div>
      </form>
    );
  }
}

export default FormularioAgendamento;
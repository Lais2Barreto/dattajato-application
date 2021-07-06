import React, { Component } from 'react';
import lavagem1 from '../../assets/img/lavagem1.jpg';
import "./estilo.css";

class HomeSobre extends Component {
  render() { 
    return (  
      <section className="HomeSobre">
        <h2 className="App-subtitulo">Serviço Lava Jato Profissional</h2>
        <h3>Agende a lavagem do seu carro com facilidade, em apenas alguns cliques!</h3>
        <div className="HomeSobre-principal">
          <img id="lavagem1" src={lavagem1} alt="Homem lavando carro na DattaJato" />
          <p>Localizada no coração da cidade, o Lavajato DattaJato traz para o mercado o que há de melhor para o seu veículo. Fundada em 2019, a DattaJato já é destaque na cidade e conquista novos clientes a cada dia.</p>
          <p id="missao"><strong><em>Nossa missão é: "Proporcionar conforto e qualidade de vida aos clientes".</em></strong></p>
          <p>Oferecemos profissionais experientes e cuidadosos com a limpeza do seu veículo. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
          <p id="last-paragraph">Também possuímos produtos especiais e de qualidade para o cuidado com o seu carro. Venha conferir!</p>
        </div>
      </section> 
    );
  }
}
 
export default HomeSobre;
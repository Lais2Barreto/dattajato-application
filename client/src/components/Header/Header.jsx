import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import "./estilo.css";

class Header extends Component {
  render() { 
    return (  
      <header className="App-header">
        <a href="http://localhost:3000/" className="App-titulo">
          <h1 className="App-titulo"><img src={logo} className="App-logo" alt="Logo DattaJato" /></h1>
        </a>
        <nav className="navegacao">
          <ul>
          <li className="item-menu"><a href="http://localhost:3000/">Home</a></li>
            <li className="item-menu"><a href="http://localhost:3000/registro">Registro</a></li>
            <li className="item-menu"><a href="http://localhost:3000/login">Login</a></li>
            <li className="item-menu"><a href="http://localhost:3000/agendar">Agendar</a></li>
          </ul>
        </nav>
      </header> 
    );
  }
}
 
export default Header;
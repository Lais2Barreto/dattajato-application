import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import "./estilo.css";

class Footer extends Component {
  render() { 
    return (  
      <footer className="App-footer">
        <img src={logo} className="App-logo" id="footer-logo" alt="logo" />
        <p className="copyright">&copy; Copyright DattaJato - 2021</p>
      </footer> 
    );
  }
}
 
export default Footer;
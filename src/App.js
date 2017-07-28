import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Componentes/Menu.jsx';
import Footer from './Componentes/Footer.jsx'; 
import Lista from './Componentes/Lista.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Lista colorFondo="pink" tituloLista="primeras  frutas" elementosDeLista= {["ford", "chevy"]}  />
        <Lista tituloLista="frutas" elementosDeLista= {["batman", "superman"]} />
        
        <Footer colorTexto="rgb(0,255,0)" textoFooter="1 Adios Mundo" />
        <Footer colorTexto="green"  textoFooter="2 Adios Mundo" />
        <Footer colorTexto="#e3e3e3" textoFooter="3 Adios Mundo" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

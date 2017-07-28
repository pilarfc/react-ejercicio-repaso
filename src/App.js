import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Componentes/Menu.jsx';
import Footer from './Componentes/Footer.jsx'; 
import Lista from './Componentes/Lista.jsx';

class App extends Component {
    
    constructor() {
        super(); 
        this.state = {
            "elementosDeListaCarros": [],
            "textoDeInput": ""
        }
        this.eventoPrueba = this.eventoPrueba.bind(this); 
        //con esto definimos el valor del this. 
        this.agregarALista = this.agregarALista.bind(this);
    }
    
    eventoPrueba(event) {
//        alert("funciona")
       /* this.state.textoDeInput = event.target.value;
        Aquí accedemos a la informacion del input, gracias al evento en si, posteriormente quien esta detonando este evento que es el input y finalmente su valor. Para comprobarlo podemos hacer un console.log. Sin embargo con este método no se hace, ya que no es nativo de React. */
        this.setState({textoDeInput:event.target.value});
        //Hasta este punto nos marca error ya que se esta haciendo setState de undefined, ya que this no está declarado, es por ello que utilizamos el método bind (unir). 
    }
    
    agregarALista() {
     this.state.elementosDeListaCarros.push(this.state.textoDeInput);
     this.setState({textoDeInput:""})
    }
    
  render() {
    return (
      <div className="App">
        <Menu />
        
        <input type="text" value={this.state.textoDeInput} onChange={this.eventoPrueba}/>
        <button onClick={this.agregarALista}>Agregar</button>
        
        <Lista colorFondo="pink" tituloLista="primeras  frutas" elementosDeLista= {this.state.elementosDeListaCarros}  />
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

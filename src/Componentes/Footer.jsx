import React from 'react';

export default class Footer extends React.Component {
    render(){
        let estilos = {
            color: this.props.colorTexto
//            backgroundColor: this.props.fondo -- para usar background u otros elementos no podemos utilizar guiones, ya que marca error de sintaxis, debemos de usar camel case.
        }
        
        return (
        <footer style={estilos}>{this.props.textoFooter}</footer> //las llaves significan que dentro de ellas va a haber js, ese this sustituye el texto default para poner las props y personalizar  cada texto. 
        )
    }
}
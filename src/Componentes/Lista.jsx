import React from 'react'; 

export default class Lista extends React.Component {
    render(){
        let estilos = {
            backgroundColor: this.props.colorFondo
        }
        
        let arregloDeLis = this.props.elementosDeLista.map((stringDeLista)=>{
            return (
            <li>{stringDeLista}</li>
            
            )
        })
        
        
        return (
         <div>
             <ul style={estilos}>
             <h1>{this.props.tituloLista}</h1>
              {arregloDeLis}
            </ul>
         </div>
        )
    }
}
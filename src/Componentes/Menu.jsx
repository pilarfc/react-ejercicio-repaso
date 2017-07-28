import React from 'react'; 

export default class Menu extends React.Component{ //Este "React" es el que se toma de la línea uno.
    render() { //El render debe de llevar un return para que cuando se ejecute regrese un html
        return (
         <nav>
             <span>Item1</span>
             <span>Item2</span>
         </nav>
        )
    }
}


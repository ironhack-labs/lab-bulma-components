import React from 'react'
import {classes} from '../colors/Colors'
import './CoolButton.css'

const CoolButton = props => {

    //En una variable guardamos lo que hay en la "className" del botón + la clase ' button'
    //con un espacio
      let myClasses = props.className + ' button';
    //Iteramos en el objeto de arriba teniendo al botón de App.js en cuenta
    //Por cada prop, si coincide, añadimos a myClasses la classe con un espacio
      Object.keys(props).forEach((prop => {
          if (classes[prop]){
              myClasses += " " + classes[prop];
          }
      }))
    

    return ( <button className={myClasses}>{props.children}</button> )
}

export default CoolButton;
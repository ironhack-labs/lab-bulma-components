import React from 'react'


const Boton = props =>{

  return(

    <div>
    <button className= {props.className} > {props.children}</button>
 </div>

  )
  
}


export default Boton
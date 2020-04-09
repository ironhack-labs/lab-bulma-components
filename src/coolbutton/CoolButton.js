import React from 'react';
import 'bulma/css/bulma.css';



const CoolButton = ( props) => {
    let classButton = 'button';
    
    classButton += props.isSmall ? 'is-small' : " ";
    classButton += props.isDanger ? 'is-danger' : " ";
    classButton += props.isSuccess ? 'is-success' : " ";
 

    
    return(
        <button href="#" className = {classButton}>{props.name}</button>
    )

   
      
}


export default CoolButton;



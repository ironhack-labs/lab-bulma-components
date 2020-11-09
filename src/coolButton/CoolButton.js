import React from 'react';


export const FormField=(props)=>{
     return(
        <button  className={props.className}>{props.children}</button>
     )
}

export default FormField
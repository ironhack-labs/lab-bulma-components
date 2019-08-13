import React from 'react'


const FormField = props =>{

  return(

      <div>
         <label>
           {props.label}
         </label>
         <input type={props.type} placeholder={props.placeholder}/>
      </div>

  )
  
}


export default FormField
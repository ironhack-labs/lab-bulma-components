import React from 'react'




const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>  
        <input className="input" type= "text" placeholder={props.input}/>   
      </div>    
     
    );
  };


  export default FormField;
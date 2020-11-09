import React from 'react';


export const FormField=(props)=>{
     return(
        <div className='field'>
            <label className='label'>{props.label}</label>
            <input className="input" type={props.type} placeholder={props.placeholder}/>
        </div>
     )
}

export default FormField
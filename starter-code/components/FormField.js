import React from 'react'

const FormField = props =>{
    
    return(
        // <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        // <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder}/>
    </div>
    
    </div>
    )
}

export default FormField
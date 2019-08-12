import React from 'react'


const Formfield = props => {
    return(
       
        <div className="field">
            <label className="label">{props.name}}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder}/>
            </div>
        </div>
            
    )
}

export default Formfield
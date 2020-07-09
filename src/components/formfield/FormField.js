import React from 'react'

const FormField = props => {
    return (
        <div 
            className='field'
        >
            <label className='label'>{props.label}</label>
            <input
                
                className='input is-small'
                type={props.type}
                placeholder={props.placeholder}
            ></input>
        </div>
    )
}

export default FormField




// <div className='field'>
// <label className='label'>{props.label}</label>
// // some other code goes here
// </div>
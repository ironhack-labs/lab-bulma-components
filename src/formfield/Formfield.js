import React from 'react'


function Formfield({label, type, placeholder}) {
    return (
            <div> 
            <div className='field'>
            <label className='label'>{label}</label>
            <div class="control">
            <input class="input" type={type} placeholder={placeholder}  />
            </div>
            </div>
            </div>
    )
}

export default Formfield;
import React from 'react'

import './formField.css'

const FormField = ({label, type, placeholder} ) => {

    return (

        <div className="field">
            <label className="label">Name</label>
            <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
        </div>
        

    )

}

export default FormField  
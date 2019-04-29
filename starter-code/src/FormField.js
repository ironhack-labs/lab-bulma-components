import React from 'react';

function FormField(){
    return(
    <div className="Form">
    <div className="field">
    <label className="label">Name</label>
    <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith"></input>
    </div>
    </div>
    <div className="field">
    <label className="label">E-mail</label>
    <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
        </div>
        </div>
    </div>
    )
}

export default FormField;
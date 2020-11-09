import React from 'react';

export const FormField = () => {
    return(
        <div>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="e.g Christian Hernandez" />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
        <div className="control">
            <input className="input" type="email" placeholder="e.g. christian@gmail.com" />
        </div>
        </div>
        <div className="field">
            <label className="label">Password</label>
        <div className="control">
            <input className="input" type="password" placeholder="e.g. christian1234" />
        </div>
        </div>
        </div>
    )
}

export default FormField;
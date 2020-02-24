import React from 'react';

function FormField(props) {
    return (
        <>
            <div className="field">
                <label className={props.labelName}>{props.labelName}</label>
                <div className="control">
                    <input className="input" type="text" placeholder={props.placeholderName}></input>
                </div>
            </div>
            <div className="field">
                <label className={props.labelEmail}>{props.labelEmail}</label>
                <div className="control"><input className="input" type="email" placeholder={props.placeholderEmail}></input></div>
            </div>
            <div className="field">
                <label className={props.labelPassword}>{props.labelPassword}</label>
                <div className="control"><input className="input" type="password" placeholder={props.placeholderPassword}></input></div>
            </div>
        </>
    )
}

export default FormField;
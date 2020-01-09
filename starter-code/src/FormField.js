import React, { Component } from "react";

function FormField(props) {
    return (

        <div>
            <div className="field">
                <label className="label">{props.name}</label>
                <div className="control">
                    <input className="input" type={props.text} placeholder={props.placeholder} />
                </div>
            </div>

        </div>

    )
}


export default FormField
import React from "react";

export default (props) => {
    return (
        <div className="field">
            <label className="label">{props.name}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>    // return some jsx here
    )
}
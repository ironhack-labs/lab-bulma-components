import React from "react";

const form = (props) => {
    return (
        <div>
            <div className="field">
              <label className="label">{props.label}</label>
            </div>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder}></input>
            </div>
            {/* <div className="field">
                <label className="label">Email</label>
            </div>
            <div className="control">
                <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>                
            </div> */}
        </div>
    )
}

export default form;
import React from 'react'

// with function use the name.property to access values
// with Object, use this.


function Form (props){
    return (          

        <div>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type={props.type} placeholder={props.placeholder} />
                </div>
            </div>      
        </div>
    )
        
}

export default Form
import React from 'react'



function FormField(props) {
    return (
        <section className="">
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder}/>
        </div>
            </div>
            
                </section>
 )
 }
                
export default FormField
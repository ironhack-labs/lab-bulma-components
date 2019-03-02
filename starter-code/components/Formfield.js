import React from 'react'

const Formfield = (props) =>  {

        return (
                <div className="field">
                    <label className="label">{props.title}</label>
                    <div className="control">
                    <input className="input" type={props.type} />
                    </div>
                </div>
                )
                }
            

export default Formfield
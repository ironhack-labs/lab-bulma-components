import React from 'react'
import 'bulma/css/bulma.css';
// import { ProgressPlugin } from 'webpack';

export default function FormField(props) {
    return (
        <div className='field' style={{marginTop: '60px'}}>
        <label className='label'>{props.label}</label>
        <div className="control">
            <input type={props.type} className="input" placeholder={props.placeholder}/>
        </div>
        
      </div>
    )
}

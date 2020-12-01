import React from 'react'

function Formfield (props) {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className="formInput">
            <input 
            className="input"
            type={props.type}
            placeholder={props.placeholder}
            />
        </div>
      </div>
    );
  };


export default Formfield;
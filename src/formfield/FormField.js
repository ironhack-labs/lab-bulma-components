import React, { Fragment, Component } from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

const FormField = props => {
    return (
        <Fragment>
            <div className='field'>
                <label className='label'>{props.label}</label>
                    <div className="control">
                        <input className="input" type={props.type} placeholder={props.placeholder} />
                    </div>
            </div>
        </Fragment>
    );
  };

  export default FormField;
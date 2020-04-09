import React, { Component } from 'react';
import '../formField/FormField.css'
import 'bulma/css/bulma.css';

class FormField extends Component {
  render(){
    return (
      <div className='FormField'>
        {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        </div>
      </div>
    )
  }
}

export default FormField
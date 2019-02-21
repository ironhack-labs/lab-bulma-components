import React, { Component } from 'react';

export default class FormField extends Component {

  constructor(props) {
    super(props)
  }

  
  render() {
    const { label, type, placeholder } = this.props
    return (
     
        <div className="column is-6 ">
          <div className="field">
            <label className="label">{label}</label>
              <div className="control">
                <input className="input" type={type} placeholder={placeholder}></input>
              </div>
          </div>
        </div>
   
    );
  }

}
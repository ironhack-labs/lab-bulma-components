import React from 'react';

const Formfield = ({ label, type, placeholder}) => {

  return (<div>
            <div className="field">
                <label className="label">{label}</label>
                <div className="control">
                    <input style={{"width": "30%"}} className="input" type={type} placeholder={placeholder} />
                </div>
            </div>
  </div>)};

export default Formfield;

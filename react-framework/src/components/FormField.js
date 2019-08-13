import React from 'react'
import '../styles/formField.css'

const FormField = props => {
  return (
    <React.Fragment className="div">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith"></input>
        </div>
      </div>
      <div className="field">
        <label classnName="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FormField
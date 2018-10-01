import React from "react"
import 'bulma/css/bulma.css';

export const Form = ({ label, placeHolder }) => {
  return (
    <div className="field" style={{width:"30%", marginLeft: "20px"}}>
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={placeHolder} />
      </div>
    </div>
  )
}

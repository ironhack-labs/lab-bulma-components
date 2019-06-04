import React from "react"

const FormField = (props) =>{
  return (
     <div className="FormFieldAll">

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder}/>
        </div>
      </div>

  </div>
  
  )
 
}
export default FormField
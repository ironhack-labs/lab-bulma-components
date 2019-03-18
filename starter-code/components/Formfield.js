import React from 'react'

function Formfield(props) {

  return (
      
    <form>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
            <input className="input" type={props.mauricio} placeholder={props.placeholder}/>
        </div>
      </div>
    </form>

    
  )

}

export default Formfield
import React from "react";


const CoolButton =(props)=>{
  return(
    <div>
        <button className={`button is-rounded ${props.type} `}>{props.name}</button>
    </div>
  )

}

export default CoolButton;
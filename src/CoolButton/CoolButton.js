import React from "react";

export default function CoolButton(props) {
  let finalClassName = 'button'
  
  finalClassName = finalClassName +' '+props.className
  
  if(props.isSmall){
    finalClassName = finalClassName+' '+'is-small'
  }

  if(props.isDanger){
    finalClassName = finalClassName+' '+'is-danger'
  }

  if(props.isSuccess){
    finalClassName = finalClassName+' '+'is-success'
  }
  console.log(props)
  return (
    <div>
      <button className={finalClassName}>{props.text}</button>
    </div>
  );
}

import "./CoolButton.css";
import 'bulma/css/bulma.css';
import React from "react";




const CoolButton = props =>{
  const name = {
    isDanger:"",
    isSuccess:"",
    isPrimary:""
  }
  if(props.isDanger){
    name.isDanger =" is-danger"   
  }
  if(props.isPrimary){
    name.isPrimary=" is-primary"
  }
  if(props.isSuccess){
    name.isSuccess=" is-success"
  }
    return(<div className="buttons">
    
    <button className={"button "+props.className+" "+name.isDanger+name.isSuccess+name.isPrimary}>{props.children}</button>
  </div>
  )}


export default CoolButton;
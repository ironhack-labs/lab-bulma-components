import React from "react"


function CoolButton(props){


    
        if(props.isDanger){
           return <button className="button is-rounded my-class is-danger is-small">B1utton </button>
   } else{
       return <button className="button is-small is-success">Button 2</button>}
    






}
export default CoolButton
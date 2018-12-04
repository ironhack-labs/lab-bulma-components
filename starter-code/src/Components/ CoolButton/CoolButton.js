import React from "react";
import CoolButtonElement from './CoolButtonElement'

class CoolButton extends React.Component{
    render(){
        return(
            <div className="field2">
                <CoolButtonElement isSmall isDanger className="is-rounded my-class">Button 1</CoolButtonElement>
            </div>

     
        )
    }
}




export default CoolButton;
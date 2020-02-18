import React, {Component} from "react";

import'bulma/css/bulma.css'

class CoolButton extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <button className={`button 
                ${this.props.isSmall ? "is-small" : "is-medium"}
                ${this.props.isDanger ? "is-danger" : "i"}
                ${this.props.isSuccess ? "is-success" : ""}
                ${this.props.isLink ? "is-link" : ""}
                ${this.props.isRounded ? "is-rounded" : ""}
                
                `
        }>{this.props.value}</button>
        )
    }
}

export default CoolButton;
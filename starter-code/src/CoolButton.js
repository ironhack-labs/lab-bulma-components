import React, { Component } from "react";


class CoolButton extends Component{
    render (props){  
        return(     
            <div>
            <button className = {this.props.className}> {this.props.children} </button>
            </div>
        );
    } 
}

export default CoolButton;


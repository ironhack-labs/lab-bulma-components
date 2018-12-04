
import React, { Component } from 'react';
import './App.css';


class CoolButton extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <button className={this.props.theClass} type="button">
                {this.props.theText}
            </button>
        )
    }
}

export default CoolButton;
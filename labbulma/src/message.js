import React, { Component } from 'react';

import './App.css';
import Divs from './divs';


class Message extends Component{
  


    render(){
        return(

            // <div className="border">

            //     <div className = "border1">{this.props.theTitle}</div>
            //     <div>{this.props.text}</div>
                
            // </div>
            <div onClick={this.props.changeStyle} class="standart">
                <div style={this.props.style}>{this.props.title}</div>
                {this.props.children}
            </div>

        )
    }
}



export default Message;
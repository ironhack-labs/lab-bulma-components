import React, { Component } from "react";
import Navbar from './Navbar';
import Signup from './Signup';
import Message from './Message';


function Container(props) {
    return (
        <div className="container">
            <Navbar />
            <Signup />
            
            <Message header="Message title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.</Message>
         </div>
    )
}

export default Container;
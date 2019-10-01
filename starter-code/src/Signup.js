import React, { Component } from 'react'
import Form from "./Form";
import Button from "./Button";

 class Signup extends Component {
    render() {
        return (
            <div>
                

                 <Form label="Name" type="text" placeholder="e.g Christopher Bolivar" />
                 <Form label="Password" type="password" placeholder="Enter Password" />
                 <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                 <Button className="button is-success is-small" >Submit</Button>
                
            </div>
        )
    }
}

export default Signup;
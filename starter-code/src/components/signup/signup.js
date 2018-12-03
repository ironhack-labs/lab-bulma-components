import React from "react";


class SignUp extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
          <div> 
            
                <Nav></Nav>
                <Form label="Name" type="text" placeholder="e.g Alex Smith"/>
                <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                <Form label="Password" type="password" placeholder="Password"/> <br/>
                <CoolButton className="button is-success" name="Submit"></CoolButton>

        </div>
        );
    }
}

export default SignUp;
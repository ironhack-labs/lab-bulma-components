import React, {Component} from 'react';
import Nav from "./Nav";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Message from "./Message";

class Signup extends Component {
    render(){
        return(
            <div className=" container">
                <Nav />
                <div className="centered">
                    <h1 className="title">CREATE YOUR ACCOUNT</h1>
                     <form>
                        <FormField lName="Name" iType="text" iName="name" placeholder="Ximena Pérez"/>
                        <FormField lName="Email" iType="email" iName="mail" placeholder="ximena@ironhack.com"/>
                        <FormField lName="Password" iType="password" iName="password" placeholder="password"/>
                        <CoolButton bName="Signup" bClass="button is-success button-centered"/>
                    </form>
                    <Message title="Hello World"/>
                </div>
            </div>
        )
    }
}

export default Signup;
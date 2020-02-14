import React, { Component } from "react";
import Navbar from "./components/navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import "./App.css";

class App extends Component {
    render() {
        const formatName = (user) => {
            return `${user.firstName} ${user.lastName}`;
        };
    
        const user = {
            firstName: "Juan",
            lastName: "Perez",
            avatarUrl: ""
        };

        const displayAvatar = (user) => {
            if (user.avatarUrl) {
                return <img src={user.avatarUrl} />
            } else {
                return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300' />
            }
        }
    
        const element = (
            <h2>Hello, {formatName(user)}!</h2>
        );

        return (
            <div className="App">
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </div>
        );
    }
}

export default App;
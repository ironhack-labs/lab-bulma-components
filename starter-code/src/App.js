import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "../components/Navbar"
import FormField from "../components/FormField"
import CoolButton from "../components/CoolButton"
import SignUp from "../components/SignUp"
class App extends Component {

   

    // Los componentes de clase tienen método return() que retorna JSX y podrían tener state
    render() {
        return(
            <main>
            <Navbar/>
            
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

            <CoolButton isSmall isDanger className="is-rounded my-class" text="Button1"></CoolButton>
            <CoolButton isSmall isSuccess text="Button2"></CoolButton>
            <SignUp label="Name" type="text" placeholder="e.g Alex Smith"/>
            <SignUp noBar label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <SignUp noBar label="password" type="password" placeholder="******"/>
            </main>
        )
    }
}

export default App
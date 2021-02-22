import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";



class Signup extends React.Component {
    render() {
        return (
            <div>
              <Navbar />  
              <FormField label="Name" type="name" />
              <FormField label="Email" type="email" />
              <FormField label="Password" type="password" />
              <CoolButton />
            </div>
        )
    }
}




export default Signup;
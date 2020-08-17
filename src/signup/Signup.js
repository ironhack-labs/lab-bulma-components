import React from './node_modules/react';
import './node_modules/bulma/css/bulma.css'
import Navbar from "./navbar/Navbar";
import FormField from './formfield/FormField.js.js.js'
import CoolButton from "./buttons/CoolButton";


const Signup = (props) => {
    return (
        <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="write here your password" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        </div>   
    );
  };


  export default Signup
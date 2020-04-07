import React, {Component} from "react";
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton.js';

class SignUp extends Component {
    render() {
      return (
          <div>
            <Navbar /> 
            <br/><br/>
            <FormField label="Name" type="text" placeholder="e.g Alejandro" />
            <FormField label="Email" type="text" placeholder="e.g alejandro@gmail.com" />
            <FormField label="Password" type="text" />
            <CoolButton isSmall isSuccess className="is-small is-success" name="Submit"></CoolButton>
          </div>

          );
    }
  }

  export default SignUp;
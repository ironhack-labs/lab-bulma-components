console.log("index.js works"); 

import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './signup/Signup';
import 'bulma/css/bulma.css';

const App = () => {
  return (<div>

      <Signup
      // navbar
        navbar = {<Navbar
          button1 = {<CoolButton class={"is-rounded is-danger is-small"}>
            Login
          </CoolButton>}
          button2 = {<CoolButton class={"is-small is-success"}>
            Signup
          </CoolButton>}
        ></Navbar>
        }
        name = {<FormField 
          label={"Name"}
          type={"text"}
          placeholder={"e.g Alex Smith"}
      ></FormField>}
        email = {<FormField 
          label={"Email"}
          type={"email"}
          placeholder={"e.g. alexsmith@gmail.com"}
      ></FormField> }
        password = {<FormField 
          label={"Password"}
          type={"password"}
          placeholder={"your password here.."}
      ></FormField> }
      button = {<CoolButton class={"is-rounded is-light is-small"}>
            Submit
          </CoolButton>}
        
        >
      </Signup>
   
     </div>);
};

export default App;

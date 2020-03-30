import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./button/CoolButton";
import { Switch, Route } from "react-router-dom";
import './button/CoolButton';

const App = () => {
  return (
    //Switch: Mira lo que entra en la ruta y lo re-manda a las rutas
    //Router: El que filtra la ruta (exact path) --> rutas exactas, entra en la primera que encuentra
    <Switch> 
    <Route exact path="/" component={()=>
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <div>
          <CoolButton
            classes="btn button is-rounded my-class is-danger is-small"
            value="Button 1"
          />
          <CoolButton
            classes="btn button is-small is-success"
            value="Button 2"
          />
        </div>
      </div>
       }/>
    <Route exact path="/signup" component={()=>
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="******"
        />
        <div>
          <CoolButton
            classes="btn button is-rounded my-class is-danger is-small"
            value="Submit"
          />
        </div>
      </div>
       }/>
    </Switch>
  );
};

export default App;

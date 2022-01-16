import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from './coolbutton/CoolButton'
import "./App.css";
import 'bulma/css/bulma.css'

const App = () => {

  return (
    <div>
      <Navbar />
      <FormField label="Name" type='text' placeholder='Peter'/>
      <FormField
        label="Email" type='email' placeholder='abc@abc.de'
      />
      <CoolButton isSuccess>Success</CoolButton>
      <CoolButton isRounded isDanger>Danger</CoolButton>
    </div>
  );
};

export default App;

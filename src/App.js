import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import Signup from "./Signup/Signup";
import Message from "./message/Message"

const App = () => {
  const dataForm = [{
    label: "Name",
    type: "text",
    placeholder: "e.g Alex Smith",
  },
{
    label: "Email",
    type: "email",
    placeholder: "e.g. alexsmith@gmail.com",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Put an Password",
  }
  ];

  
  return (
    <>
      <Signup dataForm={dataForm} />
        <Message className="is-info" title="Hello World"/>
</>
  );
};

export default App;

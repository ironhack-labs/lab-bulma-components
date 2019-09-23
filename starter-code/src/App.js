import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";
import Message from "./Message";
import Container from "./Container";

const App = () => {
  const form1 = {
    type: "text",
    label: "Name",
    placeholder: "e.g Alex Smit"
  };
  const form2 = {
    type: "email",
    label: "Email",
    placeholder: "e.g. alexsmith@gmail.com"
  };

  const btn1 = {
    text: "button1",
    isRounded: true,
    myClass: true,
    isDanger: true,
    isSmall: true,
    type: "button"
  };

  const btn2 = {
    text: "button2",
    isSmall: true,
    isSuccess: true,
    type: "button"
  };

  const message1 = {
    messageTitle: "This is the Message",
    messageBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ad ullam sunt autem blanditiis quo modi cum laboriosam quisquam animi"
  };

  return (
    <div>
      <Navbar />
      <FormField data={form1} />
      <FormField data={form2} />
      <CoolButton data={btn1} />
      <CoolButton data={btn2} />
      <Signup />
      <Message data={message1} />
    </div>
  );
};

export default App;

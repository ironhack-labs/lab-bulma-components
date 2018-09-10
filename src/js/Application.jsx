import React from "react";
import MyButton from "./myButton";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import FormField from "./FormField";
import BonusButton from "./BonusButton";
import Message from "./Message";





class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <NavBar2 />
        <div className="container">
        <h1>React Day 1 Build Some Freaking Buttons</h1>
        <BonusButton label="funbutton" />
        <FormField label="Name" type="text" placeholder="Franz" />
        <FormField label="Email" type="email" placeholder="TheReal@Donald.Trump" />
        <FormField label="Password" type="password" placeholder="P@ssw0rd" />
        <MyButton label="signup" type="submit"/>
        <div>

<Message isInfo title="Hello World"
  message= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.">
</Message>
</div>
        </div>
      </div>
    );
  }
}

export default Application;

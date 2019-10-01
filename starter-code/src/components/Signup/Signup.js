import React, {Component} from "react";
import NavBar from "../NavBar/NavBar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";
import Message from "../Message/Message";
import './Signup.css';

export default class Signup extends Component {
  constructor() {
    super();    
  }

  render() {
    return (
      <div className="Signup">
        <NavBar></NavBar>

        <form action="" method="POST">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="" />
          <div className="actions" ><CoolButton isInfo isOutlined className="btn is-normal">Submit</CoolButton></div>
        <br/>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>

        <Message isDanger title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>

        <Message isWarning title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
        </form>
      </div>
    );
  }
}



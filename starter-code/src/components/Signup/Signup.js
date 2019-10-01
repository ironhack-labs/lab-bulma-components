import React, {Component} from "react";
import NavBar from "../NavBar/NavBar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";
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
        </form>
      </div>
    );
  }
}



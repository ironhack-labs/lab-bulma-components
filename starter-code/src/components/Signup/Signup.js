import React, {Component} from 'react';
import './Signup.css';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';
import Nav from '../Nav/Nav';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Nav />
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" />
          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </form>
      </div>
    );
  }
}

export default Signup;
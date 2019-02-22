import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Message from './Message';

export default class SignUp extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navbar />
        <form>
        <div className="columns">
          <div className="column">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
            <FormField label="Email" type="text" placeholder="alex.smith@gmail.com"/>
            <FormField label="Password" type="text" placeholder="password"/>
            <CoolButton isSmall isSuccess isPrimary>Submit</CoolButton>
          </div>
          <div className="column">
            <Message isInfo title="Hello World">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
          </div>
        </div>
  
        </form>
      </div>
    );
  }

}
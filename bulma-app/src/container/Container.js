import React from 'react';
import 'bulma/css/bulma.css';
import FormField from '../formfield/Formfield'
import CoolButton from '../button/Button'
import Message from '../message/Message'

const Container = props => {
    return (
        
        <div className="container">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
               
                <CoolButton className="button is-small is-success" text="Submit"></CoolButton>

                <Message className="message" isInfo title='Hello World' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." textstrong="Pellentesque risus mi">
                </Message>
        </div>
  
    );
  }
  
  export default Container;
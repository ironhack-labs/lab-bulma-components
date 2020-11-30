import React, {Fragment} from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import SignUp from './signup/SignUp';
import Message from './message/Message'

const App = () => {
  return (
    
    <Fragment>
      <SignUp/>
      {/* <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
      <Message className="message is-info" title='Hello World' paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strong="Pellentesque risus mi."/>
    </Fragment>
  );
};

export default App;

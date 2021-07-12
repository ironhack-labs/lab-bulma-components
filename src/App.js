import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import SignUp from './signup/SignUp';
import Message from './message/Message';
import 'bulma/css/bulma.css';

const App = () => {
  let message = {
    header: "Header 2",
    body: "Text text text text text text text text text text text text text text text text text text."
  }

  return (
    <>
      <SignUp />
      <Message message={message}/>
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isGrouped isInverted className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSuccess isInfo >Button 2</CoolButton> */}
    </>
)};

export default App;

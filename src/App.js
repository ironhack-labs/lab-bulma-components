import React from 'react';
import Navbar from "./Navbar"
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Signup from "./Signup"
import Container from './Container'
import Message from './Message'

const App = () => {
  return (
    <Container>
      {/* <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith"/>
      <FormField label="Email" type="Email" placeholder="e.g. alexsmith@gmail.com"/>
      <CoolButton isSmall isDanger className="is-rounded my-class"> Button 1 </CoolButton>
      <CoolButton isSmall isSuccess> Button 2 </CoolButton> */}
      <Signup/>


      <Message isInfo title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>

<CoolButton isDanger>Danger</CoolButton>

    </Container>
  )
};

export default App;

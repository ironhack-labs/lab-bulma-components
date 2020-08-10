import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar";
import FormField from './formfield/FormField';
import CoolButton from './button/CoolButton';
import Signup from './signup/signup';
import "./Index.css";
import Message from './message/Message';
import Container from './container/Container';

const App = () => {
  return (
    <div className="NavBarApp">
    <Navbar />

    <Signup/>
    <Container >
    <br></br>
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      <br></br>
    </Container>
    
    </div>
  )
};

export default App;

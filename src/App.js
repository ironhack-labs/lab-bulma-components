import React from 'react';
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";
import CoolButton from "./buttons/CoolButton";
import Container from "./container/Container";
import Message from "./message/Message";

const App = () => {
  return (
    <div>
    <Navbar />
    <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
    <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <Formfield label="Password" type="password" placeholder="******" />
    <CoolButton className="is-primary">Go!</CoolButton>
    <Container />
    <Message className="message-body">lkdjfosjflkshflo</Message>
    
    </div>
  );
};

export default App;

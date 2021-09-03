import React from 'react';
import "./App.css";
import "bulma/css/bulma.css";
import Signup from "./signup/signup";
import Message from "./message/message";
import Container from "./container/container";

const App = () => (
  <div>   
    <Container>
    <Signup/>
      <Message
        color="is-info" 
        title='Hello World'
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque risus mi."
        width="360px"
      />
    </Container>
  </div>
); 

export default App;

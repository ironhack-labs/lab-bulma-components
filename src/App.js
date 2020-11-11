import React from 'react';
import Container from './container/Container';
import Navbar from './navbar/Navbar';
import Signup from './signup/Signup';
import Message from './message/Message';


const App = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Signup/> 
        <Message title="Teste Cx Messagem" isDanger>
          Teste do componente de caixa de mensagem!
        </Message> 
      </Container>
    </>
    )
};

export default App;

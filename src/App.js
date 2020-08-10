import React from 'react';
import Navbar from './components/navbar/Navbar';
import Formfield from './components/formField/FormField';
import CoolButton from './components/coolButton/CoolButton'
import Container from './components/container/Container';
import Message from './components/message/Message';


const App = () => {
  return (
    <div>
      <Navbar />
      <section class="section">
        <Container>
          <Formfield label="Name" placeholder="e.g Alex Smith" type="text" />
          <Formfield label="Email" placeholder="e.g. alexsmith@gmail.com" type="email" />
          <Formfield label="Password" type="password" />
          <CoolButton type="submit" basicClass="button" isSuccess isLarge isFullWidth>
              <span>Send</span>
          </CoolButton>
          <Message isInfo title='Hello World'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </section>
    </div>
  );
};

export default App;

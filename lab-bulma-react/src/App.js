import React from 'react';
import Navbar from './components/navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Container from './components/Container'




import './App.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="formulario">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <CoolButton isDanger isMedium className="is-rounded my-class" text="Button 1"></CoolButton>
        <CoolButton isMedium isSuccess text="Button 2" className="is-rounded my-class"></CoolButton>
      </div> */}
      <div className="formulario">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="password" type="password" />
        <CoolButton isMedium isSuccess text="Sign Up" className="is-rounded my-class"></CoolButton>
      </div>
      <Container isInfo title="Hello World" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " strong="Pellentesque risus mi.">

      </Container>


    </div>

  );
}

export default App;

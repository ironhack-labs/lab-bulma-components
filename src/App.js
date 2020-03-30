import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from "./formfield/Formfield";
import CoolButton from "./CoolButton/CoolButton";
import Container from "./Container/Container";


const App = () => {
  return (
    <div>
  <Navbar/>
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton label="Button1" isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
  <CoolButton label="Button2" isSmall isSuccess>Button 2</CoolButton>
  <Container title='Hello World' isInfo></Container>
  </div>
  );
};

export default App;

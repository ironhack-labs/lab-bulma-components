import React from 'react';
import FormFields, { FormField } from './FormFields';
import Navbar from './Navbar';

// TODO: como eu sirvo esse componente numa rota?! =O
// meu cool button não vai servir =( Condicional?
const Signup = () => {
  <FormField label="Name" type="text" placeholder="John Doe" />
  <FormField label="Email" type="email" placeholder="John_Doe@gmail.com" />
  <FormField label="password" type="password" placeholder="" />
  <a>My button component won't work here, but it's ok because i don't know how to render this comp anyway in /signup ¯\_(ツ)_/¯ (for now)</a>
};

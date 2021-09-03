import React from 'react';
import "./App.css";
import 'bulma/css/bulma.css';
import Navbar from "./components/Navbar/Navbar";
import Formfield from './formfield/Formfield';

const App = () => {
  return (
    <div>
  <Navbar />
  <Formfield label="Nome" type="text" placeholder="ex: João da Silva"/>
  <Formfield label="E-mail" type="text" placeholder="ex: joão@silva.com.br"/>
    </div>
    )
};

export default App;

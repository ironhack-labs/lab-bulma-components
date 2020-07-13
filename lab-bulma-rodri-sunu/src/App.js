import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FormField from './components/FormField/FormField'
import CoolButton from './components/CoolButton/CoolButton';
import Container from './components/Container/Container';

function App() {
  return (
    <>
      <main>
        <section>
          <Navbar></Navbar>
        </section>
        <section>
          <FormField></FormField>
        </section>
        <section>
          <CoolButton></CoolButton>
        </section>
        <section>
          <Container></Container>
        </section>
    </main>  
    </>
  )
}

export default App

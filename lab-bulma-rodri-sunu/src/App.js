import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FormField from './components/FormField/FormField'
import CoolButton from './components/CoolButton/CoolButton';
import SignUp from './components/SignUp/SignUp';

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
    </main>  
    </>
  )
}

export default App

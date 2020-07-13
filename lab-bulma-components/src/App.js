import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FormField from './components/FormField/FormField'
import Button from './components/Button/Button'

function App() {
  return (

    <main>

    <section>
    <Navbar> </Navbar> 
    </section>

    <section>
    <FormField> </FormField> </section>

    {/* <section >
    <Button></Button>
    </section> */}

    </main>

  )
}

export default App
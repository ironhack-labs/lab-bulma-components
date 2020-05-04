import React from 'react'
import Navbar from './ui/navbar/Navbar'
import FormField from './ui/formField/formField'
import CoolButton from './ui/button/Button'

const App = () => {
  return (
    <>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>    
    </>

  )
}

export default App;

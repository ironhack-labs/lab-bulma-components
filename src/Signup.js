import React from 'react'
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

class Signup extends React.Component{
  render(){
    return (
      <div>
        <Navbar/>
        <section className='signup'>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="Insert your password" />
        </section>
        <div className='form-btn'>
          <CoolButton isSmall isSuccess type='submit'>Submit</CoolButton>
        </div>        
      </div>
    )
  }
}
export default Signup
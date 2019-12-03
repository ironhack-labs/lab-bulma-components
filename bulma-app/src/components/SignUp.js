import React from 'react'
import Navbar from '../components/Navbar'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'
import Message from '../components/Message'

function SignUp() {
  return (
    <div>
    <Navbar />
    <>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="" />
    </>
    <>
      <CoolButton className="button isRounded my-class isDanger isSmall" name="Button 1"></CoolButton>
      <CoolButton className="button isSmall isSuccess" name="Button 2"></CoolButton>
    </>
    <>
      <Message title="Hello world" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."/>
    </>
    </div>
  )
}

export default SignUp
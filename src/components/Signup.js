import React from 'react'
import Nav from './Nav'
import Formfield from './FormField'
import Coolbutton from './CoolButton'

export default function Signup () {
  return (
    <div>

      <Formfield type='text' label='Name' placeholder='your name' />
      <Formfield type='email' label='Email' placeholder='your email' />
      <Formfield type='password' label='Password' placeholder='your password' />
      <Coolbutton className='is-small is-success'>Submit</Coolbutton>
      
    </div>
  )
}

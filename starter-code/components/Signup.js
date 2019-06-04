import React, { Component } from 'react'
import Navbar from '../components/navbar'
import FormField from '../components/FormField'
import CoolButton from "../components/CoolButton"


class Signup extends Component {

  render() {

    return (

      <main>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="password" type="password" placeholder="********" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>
      </main>
    )
  }
}

export default Signup
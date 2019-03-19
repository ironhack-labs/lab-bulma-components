import React from 'react';

import Navbar from './Navbar'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'

function Signup(props) {
    return (
      <section className="section">
          <Navbar/>
          <form>
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <FormField label="Password" type="password" placeholder="e.g. asdfasdgfasdghefgjh" />
              <CoolButton isSmall isDanger className="is-rounded my-class"/>
          </form>
      </section>
      )
}

export default Signup
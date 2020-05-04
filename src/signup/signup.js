import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './signup.css'
import CoolButton from './../coolbutton/coolbutton'
import Navbar from './../navbar/navbar'
import FormField from './../formfield/formfield'

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="columns is-centered">
          <div className="column is-one-third">
            <form action="#" method="get">
              <div>
                <FormField
                  label="Name"
                  type="text"
                  placeholder="e.g Alex Smith"
                />
              </div>
              <div>
                <FormField
                  label="Email"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
              <CoolButton isButton isPrimary link="#">Submit</CoolButton>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup

import React from 'react'
import 'bulma/css/bulma.css'

import Navbar from './navbar/navbar'
import FormField from './formfield/formfield'
import CoolButton from './coolbutton/coolbutton'

const App = () => {
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
          </form>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-one-third">
        <CoolButton isSmall isDanger className="is-rounded my-class">AAAAAAAAAAA</CoolButton>
        </div>
      </div>
    </div>
  )
}

export default App

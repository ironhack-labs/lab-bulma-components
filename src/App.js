import React from 'react'
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar.js'
import Formfield from './formfield/Formfield.js'
import Coolbutton from './coolbutton/Coolbutton.js'

const App = () => {
    return (
    <div className="navbar">
      <Navbar/>
    </div>
    <div className="field">
    <Formfield label="name" type="text" placeholder="e.g Alex Smith"/>
    <Formfield label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
    </div>
    <div className="button">
    <Coolbutton class="button is-rounded my-class is-danger is-small">Button1</Coolbutton>
    <Coolbutton class="button is-small is-success">Button2</Coolbutton>
    </div>
    )
  };

export default App;


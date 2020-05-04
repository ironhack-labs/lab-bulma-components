import React from 'react'
import 'bulma/css/bulma.css'
// import './App.css'
// import Navbar from './navbar/Navbar'
// import Formfield from './formfield/Formfield'
// import CoolButton from './coolButton/CoolButton'
import Signup from './signup/Signup'

const App = () => {
  return (
    <>
    {/* <div>
      <Navbar />
    </div>

    <div>
      <Formfield 
        label="Name"
        type="text"
        placeholder="e.g Alex Smith"
      />
      <Formfield 
        label="Email"
        type="email"
        placeholder="e.g alexsmith@gmail.com"
      />
    </div>

    <div>
      <CoolButton isSmall isBlack className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div> */}
    

    <Signup/>
    </>
  )
};

export default App;

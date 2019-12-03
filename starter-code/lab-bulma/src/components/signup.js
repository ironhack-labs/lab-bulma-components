import React from 'react'
import NavBar from './navBar'
import FormField from './formField'
import CoolButton from './button'

const Signup = props => {
    return (
        <>
    <div className="App">
        <NavBar/>
    </div>
    <div>
      <FormField label="Name" type="text" name="Alex Smith" email="alexsmith@gmail.com" />
      {/* <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}

    </div>
    <div>
      <CoolButton isSmall isDanger className="is-rounded my-class" text1= 'button 1' text2='button2' ></CoolButton>
      {/* <CoolButton isSmall isSuccess text2='button2'  ></CoolButton> */}
    </div>
    </>
    
    )

}
export default Signup
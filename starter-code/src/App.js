import React, { Component } from 'react';
// import Navbar from "./Navbar"
// import FormField from "./FormField"
// import CoolButton from "./CoolButton"
import Signup from "./Signup"

class App extends Component {
    render() {
        return (
          <div className="root">
            {/* <Navbar />
            <div className="section">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <CoolButton isSmall isDanger className="is-rounded my-class">Reject</CoolButton>
              <CoolButton isSmall isSuccess>Submit</CoolButton>     
            </div> */}
            <Signup />
          </div>
        )
    }
}

export default App;
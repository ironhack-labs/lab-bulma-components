import React from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js'
import SignUp from './SignUp.js';
import "bulma/css/bulma.css";



class App extends React.Component {
    render() {
        return(

            <div>
                {/* <Navbar />

                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                
                <CoolButton isSmall isDanger className="is-rounded my-class" buttonvalue="Download"></CoolButton> */}
                
                <SignUp/>

            </div>
        )
    }
}


export default App;
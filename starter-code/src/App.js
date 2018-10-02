import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import  Navbar from './components/Navbar.jsx'
import Field from   './components/Field.jsx'
import Signup from './components/Signup.jsx'
//import Buttons from './components/Buttons.jsx'

class App extends Component{
    render(){
        return(
            <div>

                <Navbar/>

               <Field/>

                <Signup/>


            </div>



        )
    }
}
export default App
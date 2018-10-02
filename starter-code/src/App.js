import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import  Navbar from './components/Navbar.jsx'
import Field from   './components/Field.jsx'

class App extends Component{
    render(){
        return(
            <div>

                <Navbar/>

               <Field/>


                <button className="button is-rounded my-class is-danger is-small">Button 1</button>
                <button className="button is-small is-success is-rounded ">Button 2</button>


            </div>



        )
    }
}
export default App
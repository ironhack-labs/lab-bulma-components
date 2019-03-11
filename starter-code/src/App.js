import React, {Component} from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import Login from './components/Login';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navbar/>
                
                <div className="box">
                    <Login/>    
                </div>
                
                
            </div>
        )
    }
};

export default App;
import React, {Component} from 'react';
import './App.css'
import Form from './components/Form';


 class App extends Component{
   render() {
     return(
       <div>
         <Navbar />
         <Form />
         <CoolButton />
       </div>
     )
   }
 }

 export default App;
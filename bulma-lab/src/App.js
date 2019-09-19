import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import FormField from './components/FormField';
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'

class App extends React.Component {
 

  // showAnimals = () =>{
  //   return this.state.listOfAnimals.map((eachAnimal)=>{
  //     return(
  //       <SingleAnimal  
  //       name={eachAnimal.name} 
  //       weight={eachAnimal.weight}/>
  //       )
  //   })

  // }

  render(){
      return (
        <div>

      <Signup>
        
      </Signup>




      {/* BELOW IS WITH INDIVIDUAL COMPONENTS */}
      {/* <NavBar >

      </NavBar>
     
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />


      <CoolButton class="button is-small is-danger is-rounded">Button 1</CoolButton>
      <CoolButton class="button is-small is-success">Button 2</CoolButton> */}

      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

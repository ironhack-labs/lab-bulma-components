import React from 'react';
import Navbar from './navbar/Navbar';
import SignUp from './components/SignUp'
import 'bulma/css/bulma.css';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <SignUp />
    </div>
    
  )
};

export default App;

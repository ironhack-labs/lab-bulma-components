import React from 'react';
import Navbar from './navbar/Navbar';
import 'bulma/css/bulma.css';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  )
};

export default App;

import React from 'react';
import Navbar from './navbar/Navbar';
import Signup from './signup/signup';

const App = () => {
  return (
  <>
  <Navbar/>
    <div className="app">
      <Signup/>
    </div>
  </>
  );
};

export default App;

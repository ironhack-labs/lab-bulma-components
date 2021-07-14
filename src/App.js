import React from 'react';
import 'bulma/css/bulma.css';
import "./App.css";

import Navbar from './components/NavBar';
import SignupPage from './components/SignupPage';


const App = () => {
  return (
    <div className="App">

      <Navbar />
      
      <div className="signup-page">
        <SignupPage />
      </div>

    </div>
  );
};

export default App;

import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import './App.css';
import './navbar/Navbar.css';
import 'bulma/css/bulma.css';
import './formfield/FormField.css';
import './coolbutton/CoolButton.css';

const App = () => {
  return (
    <div className="general-container">
      <Navbar />
      <div className="principal-content-box">
        <form className="forms-box" action="">
          <FormField labeName="Name" labelFor="" inputType="text" placeholder="🙋‍♂️Name"/>
          <FormField labeName="Email" labelFor="" inputType="email" placeholder="📩 Email"/>
          <FormField labeName="Password" labelFor="" inputType="password" placeholder="🔐*******"/>
          <div className="forms-buttons">
            <CoolButton styleClass="button is-danger" typeOfButton="reset" value="Reset"/>
            <CoolButton styleClass="button is-success" typeOfButton="submit" value="Submit"/>
          </div>
        </form>
      </div>
      
      
    </div>
    
  )
};

export default App;

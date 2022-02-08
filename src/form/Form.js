import React from 'react';
import CoolButton from '../coolbutton/CoolButton';
import Navbar from '../navbar/Navbar';

const Form = ({ label, type, placeholder }) => {
  return (<>
      <form>
        <label className="label">{label}</label>
        <input className="input" type={type} placeholder={placeholder}></input>
      </form>
  </>);
};

export default Form;

import React, { Component } from 'react';
import './App.css';
// import NavBar from "./NavBar.js";



class FormField extends Component{

    render(){
      
      return(
      <form className='this-form'>
      <div className='first-form'>
      <label>Name : </label>
      <input type='text' placeholder='name'></input>
      </div>
      <div className='first-form'>
      <label>Email : </label>
      <input type='text' placeholder='name'></input>
      </div>
      <button>submit</button>
      </form>
 
    );
}
    
}

export default FormField;
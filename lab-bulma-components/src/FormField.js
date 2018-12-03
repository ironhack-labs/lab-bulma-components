import React, { Component } from 'react';
import './App.css';



class FormField extends Component{

    render(){
      
      return(
      <form className='this-form'>
      <div className='first-form'>
      <label>Name : </label>
      <input type='text' placeholder='put ya name here'></input>
      </div>
      <div className='first-form'>
      <label>Email : </label>
      <input type='text' placeholder='put ya name here'></input>
      </div>
      <button>submit dat shiiiiit</button>
      </form>
 
    );
}
    
}

export default FormField;
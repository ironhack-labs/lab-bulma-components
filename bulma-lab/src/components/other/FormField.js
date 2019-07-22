import React, { Component } from 'react';
import '../../App.css';


class Main extends Component {
  constructor(props){
    super(props)
  }

  render(){

  
  return (

    <div> 
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type={this.type} placeholder={this.props.placeholder}/>
        </div>
      </div>


      {/* <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="e.g. alexsmith@gmail.com" value="" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div> */}

      
    </div>
    


  );
  }
}

export default Main;
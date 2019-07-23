import React, {Component } from "react";
import 'bulma/css/bulma.css';

import Navbar from "../navbar/Navbar";
import Formfield from "../formfield/Formfield";
import Coolbutton from "../coolbutton/Coolbutton";


class Main extends Component {
  render(){

    return (
      <div>
        
      
        <Navbar></Navbar>


        <div class="columns">
  <div class="column">
  
  </div>
  <div class="column">
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith"></Formfield>
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></Formfield>
      <Formfield label="Password" type="password" placeholder="password"></Formfield>
      
<div className="level">

  <div className="level-item" Style="margin-top:20px;">

      <Coolbutton isSuccess className="button is-danger">Button 2</Coolbutton>
  </div>

</div>


    
  </div>
  <div class="column">
  
  </div>
  
</div>
        
       
        
        {/* <Coolbutton isSmall isDanger className="is-rounded my-class">Button 1</Coolbutton> */}
        {/* <Coolbutton isSmall isSuccess>Button 2</Coolbutton> */}
        {/* <button className="button is-rounded my-class">outisinen</button> */}
      </div>
       
    );
  }
}

export default Main;
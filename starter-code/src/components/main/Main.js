import React, {Component } from "react";
import 'bulma/css/bulma.css';

import Navbar from "../navbar/Navbar";
import Formfield from "../formfield/Formfield";
import Coolbutton from "../coolbutton/Coolbutton";
import Message from "../message/Message";


class Main extends Component {
  render(){

    return (
      <div>
        
      
        <Navbar></Navbar>


        <div className="columns">
  <div className="column">
  
  </div>
  <div className="column">
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith"></Formfield>
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></Formfield>
      <Formfield label="Password" type="password" placeholder="password"></Formfield>
      
<div className="level">

  <div className="level-item" >

      <Coolbutton isSuccess className="button is-danger">Button 2</Coolbutton>
  </div>

</div>
<div className="container">

    <Message isInfo title="Hello World">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
</div>

    
  </div>
  <div className="column">
  
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
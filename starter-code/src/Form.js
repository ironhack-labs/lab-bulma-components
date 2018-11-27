import React, {Component} from "react";
import "./Form.css";
import Formfield from "./Formfield.js";
import Coolbutton from "./Coolbutton.js";




class Form extends Component {



render () {

    return(  
           <div className="form">
           <label>Name</label>
<Formfield label="input" type="text" placeholder="Alex Smith" />
<label>Email</label>
<Formfield label="Email" type="email" placeholder="alexsmith@gmail.com" />

    <Coolbutton/>
</div>
    )
}

}


export default Form;
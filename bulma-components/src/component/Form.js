import React from "react";
// import { directive } from "@babel/types";



// Creating component
export default class Form extends React.Component {
    render(){

        return (
            
        <div className="formField">

                <label className="label">{this.props.label}</label>
                <input className="input" type="text" placeholder={this.props.placeholder} />
  

                {/* <label className="label">Email</label> */}
                {/* <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
  
        </div>
            
            
            )
                }
                }
            
            
            



// export to the app.js
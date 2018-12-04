
import React, { Component } from 'react';
import './App.css';

class FormField extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Alex Smith" />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
            </div>  
            </div>
        )
    }
}

export default FormField;
import React, {Component} from "react";
import 'bulma/css/bulma.css';

class FormField extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="field">
            <label className="label">{this.props.label}</label>
                <div className="control">
                 <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
                </div>
            </div>
        )
    }
}
export default FormField;
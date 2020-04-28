import React, {Component} from 'react';
import "./FormField.css";
import "bulma/css/bulma.css";

class FormField extends Component {

    constructor(props) {
        super(props);        
    }

    render(){

        const { label, type, placeholder } = this.props;

        return(
            <div className="formDiv">
                <div className="field">
                    <label className="label">{label}</label>
                    <div className="control">
                        <input className="input" type={type} placeholder={placeholder} />
                    </div>
                </div>
            </div>
        );
    }
}


export default FormField; 
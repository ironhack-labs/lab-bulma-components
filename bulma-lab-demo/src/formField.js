import React from 'react';
import './field.css';

class FormField extends React.Component{


    render(){
        return(
            <nav className="whole">
                <div className="field">
                    <label className={this.props.label}>{this.props.label}</label>
                    <div className="control">
                        <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                    </div>
                </div>
            </nav>
        )
    }
}

export default FormField;
import React from "react";

class FormField extends React.Component {
    render() {
        return (
                <div class="field">
                    <label class="label">{this.props.label}</label>
                    <div class="control">
                        <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
                    </div>
                </div>
            
        );
    }
}

export default FormField;
import React from 'react';



class FormField extends React.Component {
    render() {

        console.log('props=', this.props)

        const {placeholder, type, label} = this.props; // on crée 3 variables qui vont être cherchée dans this.props

        return (
            <div>
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
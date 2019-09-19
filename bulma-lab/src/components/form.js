import React from 'react';

export default class FormField extends React.Component {

    render() {

        return (
            <div className="field">

                <label className="label"> {this.props.label} </label>
            
                <div className="control">

                    <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
                
                </div>

            </div>
            
            // <FormField label={this.props.nameLabel} type="text" placeholder={this.props.placeholder} />

        )

    }

}

// Can do this here or above when declaring className
// export default Navbar;
// TODO: prop
// The prop will be where we pass in information to the component 
//                 <h3>Welcome, {this.props.theUsername}</h3>
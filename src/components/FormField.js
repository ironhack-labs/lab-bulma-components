import React from 'react';


class Formfield extends React.Component {

  render() {
    return (
   
        
        <div className="field">
            <label className="label">{this.props.theLabel}</label>
            <div className="control">
                <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
            </div>
        </div>

    )
  }
} 



export default Formfield;
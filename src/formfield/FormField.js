import React from 'react'

class FormField extends React.Component {
    render () {
    return (
      <div className='field'>
        <label className='label'>{this.props.label}</label>
        <div className="formInput">
            <input 
            className="input"
            type={this.props.input}
            placeholder={this.props.placeholder}
            />
        </div>
      </div>
    );
  };
}

export default FormField;
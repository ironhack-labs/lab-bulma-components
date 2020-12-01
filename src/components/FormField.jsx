import React from 'react';

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{this.props.label}</label>
            <div className = 'control'>
                <input className = 'input'
                    type={this.props.inputType}
                    placeholder={this.props.placeholder}
                    required
                />
            </div>   
      </div>
    );
  };


export default FormField;
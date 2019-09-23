import React from 'react';

class Form extends React.Component{
  render(){
    return(
      <div className ="form-style">
        <label className ="label"> {this.props.inLabel}</label>

        <div className ="control">
          <input className ="input"
          type ={this.props.theType}  
          placeholder={this.props.thePlaceHolder} />
        </div>

      </div>
    )
  }
}

export default Form;

import React, { Component } from 'react';
import '../coolButton/CoolButton.css'
import 'bulma/css/bulma.css';
import InsertButtons from './InsertButtons';

class CoolButton extends Component {
  // insertButtons(props){
  //   const {button} = this.props
  //   console.log(button)
  //   return <button className=button>this.children</button>
  // }
  render(){

    return (
      <div className='CoolButton'>
        {/* <InsertButtons className="button is-success"> Log In </InsertButtons> */}
        <InsertButtons className="button is-success is-rounded">Save changes</InsertButtons>
        <InsertButtons className="button is-info">Save and continue</InsertButtons>
        <InsertButtons className="button is-danger">Cancel</InsertButtons>
      </div>
    )
  }
}

export default CoolButton

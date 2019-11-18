import React from 'react';
import CoolButton from '../cool-button-component/cool-button';
import FormField from '../form-field-component/form-field';
import Message from '../message-component/message';
import './container.css';
class Container extends React.Component {
//     constructor(props){
//         super(props);
// this.openPopup = false;
//     }
    render() {
        this.openPopup = false;
        console.log(this.openPopup)
        const fields = [{label: 'Name', type: 'text', placeholder:'e.g Alex Smith'},
        {
          label: 'Email',
          type:'email',
          placeholder:'e.g. alexsmith@gmail.com'
        },
      {
        label: 'Password',
        type: 'password',
        placeholder: '*******'
      }];
        const buttonSubmit = {name: 'Submit', type:'submit',class:'button is-rounded is-success submit'};
  const handleSubmit = () => {
    this.openPopup = true;
    console.log(this.openPopup)
   
  } 
        return (
            <div className="main-form">
            <Message showPopup = {this.openPopup}/>
            <form  className="form" onSubmit={handleSubmit}>
            <FormField field = {fields[0]} />
              <FormField field = {fields[1]} />
              <FormField field = {fields[2]} />
              <div className="submission">
              <CoolButton button= {buttonSubmit} />
              </div>
            </form>
            
            </div>

        
        );
    }
}
export default Container;
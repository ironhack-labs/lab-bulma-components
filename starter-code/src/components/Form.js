
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FormField} from 'react-bulma-components';
import {
  Field,
  Control,
  Label,
  Input,
  Span,
  I,
  textarea,
  select,
  checkbox,
  radio,
  help,
} from 'react-bulma-components/lib/components/form';



export class Form extends Component{
  state ={
    username:'',
    password: '',
    name:''
  };
  onChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    this.setState({
      [evt.target.name]: value,
    });
  };
    render(){
      const { email, name, username, password, comment, gender, question, termsAccepted } = this.state;
     return(
       <div>
           <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input"onChange={this.onChange} name={name}type="text" placeholder="Text input"/>
        </div>
      </div>
    
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" onChange={this.onChange} type="text" placeholder="Text input" name={username} />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>
      
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" onChange={this.onChange} placeholder="Email input" name={email}/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>
      
      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox"/>
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>
      
      <div className="field">
        <div className="control">
          <label className="radio">
            <input type="radio" name="question"/>
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="question"/>
            No
          </label>
        </div>
      </div>
      
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Signin</button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>
     

     {/* <Field>
        <Label>Name</Label>
        <Control>
          <Input className="input is-success" onChange={this.onChange} name="name" type="text" placeholder="Name input" value={name} />
          
        </Control>
      </Field> */}
       </div>
       
     )
    }
}
// ReactDOM.render(
//   <Form/>,
//   document.getElementById('sign'));
import React from 'react';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton.js'
import './Signup.css'

const forms =[
    {
      label:'Name',
      type:'text',
      placeholder:'eg. Alex Smith'
    },
    {
      label:'Email',
      type:'email',
      placeholder:'e.g. alexsmith@gmail.com'
    }
  ]

const Signup = () => {
    return (
      <div>      
        <Navbar />
    {
      forms.map(form => <FormField label={form.label} type={form.type} placeholder={form.placeholder}/>)
    }
    <CoolButton size='is-small' color ='is-primary' name='Submit' />
      </div>
    );
  };


export default Signup
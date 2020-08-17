import React from 'react';
import FormField from '../formfield/formField';
import CoolButton from '../coolbutton/coolButton';

const Container = (props) => {
  return (
    <div className="container">
        <div className="notification">
            <FormField label= {'Name'} type ={'text'} placeholder = {'e.g Alex Smith'}/>
            <FormField label= {'Email'} type ={'email'} placeholder = {"e.g. alexsmith@gmail.com"}/>
            <FormField label= {'Password'} type ={'password'}/>
            <CoolButton isPrimary isDark isCentered/>
        </div>
    </div>
  )
};

export default Container;

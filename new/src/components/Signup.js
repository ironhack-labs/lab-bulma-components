import React from 'react'
import Nav from './Nav';
import FormField from './FormField';
import CoolButton from './CoolButton';

export default () => {
  return <div className="form">
    <FormField type="text" placeholder="Nombre" name="name" clase="input is-info" />
    <FormField type="email" placeholder="Email" name="email" clase="input"/>
    <FormField type="password" placeholder="Password" name="password" clase="input" />
    <CoolButton clase="button is-success" content="Crear cuenta" />
    </div>
}
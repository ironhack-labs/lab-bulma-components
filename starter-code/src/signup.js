import React from 'react'
import FormField from './form';
import Boton from './button';

export default () => {
  return <div className="form">
    <FormField type="text" placeholder="Nombre" name="name" clase="input is-info" />
    <FormField type="email" placeholder="Email" name="email" clase="input"/>
    <FormField type="password" placeholder="Password" name="password" clase="input" />
    <Boton clase="button is-success" content="Crear cuenta" />
    </div>
}
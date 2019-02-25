import React from 'react'
import Forma from './form';
import Boton from './button';

export default () => {
  return <div className="form">
    <Forma type="text" placeholder="Nombre" name="name" clase="input is-info" />
    <Forma type="email" placeholder="Email" name="email" clase="input"/>
    <Forma type="password" placeholder="Password" name="password" clase="input" />
    <Boton clase="button is-success" content="Crear cuenta" />
    </div>
}
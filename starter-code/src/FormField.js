import React, {Component} from "react";
import CoolButton from "./CoolButton";

class FormField extends Component {
    render () {
        return (

<div className="container">

<div class="field">
  <label class="label">Dime tu nombre, pecador</label>
  <div class="control">
    <input class="input" type="text" placeholder="Tu nombre en la Tierra"/>
  </div>
</div>

<div class="field">
  <label class="label">Tu usuario infernal</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Como se verá registrada tu alma en el Libro del Juicio"/>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">Aún disponible, adelante pecador</p>
</div>

<div class="field">
  <label class="label">Correo de los infiernos</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="ejemplo: satan@hellcorporation.com"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">No me quieras engañar, ese ya está registrado</p>
</div>

<article class="message is-danger">
  <div class="message-header">
    <p>Precaución</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Si llegaste a este punto es porque tu vida en la Tierra estuvo llena de pecado. ¿Estás dispuesto a seguir?
  </div>
</article>


<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      Acepto los <a href="#">términos y condiciones del príncipe infernal</a>
    </label>
  </div>
</div>



<CoolButton />

</div>
        )        
    }
}

export default FormField;
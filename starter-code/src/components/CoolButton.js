import React, { Component } from 'react';

const bulmaClasses = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
  marginButton: 'margin-button', // Added after
  font5: 'is-size-5' // Added after
}

export default class CoolButton extends Component {
 
  constructor(props) {
    super(props),
    this.classes = Object.keys(props).map(property => bulmaClasses[property]).join(' ');
  }
    // 1. this.classes se le añade para poder añadir al componentes ciertos valores
    // 2. Object.keys(props) coge las propiedades del componente una vez renderizado en App.js, lo que devuelve un array de propiedades
    // 3. Si mapeo este array obtenido y por cada uno de esos elementos devuelvo un nuevo array con todos los elementos de bulmaClasses cuyo key coincida con alguna de estas propiedades
    //    asi obtengo un array de los valores que coinciden. Es decir un array de clases en este caso, y tambien de elementos undefined que no macheen
    // 4. Si uso join(), uno todos los elementos del array en un string, y si uso join(' ') uno todos los elementos del array en un string con un espacio entre cada uno.
    //    asi obtengo un string que usar en this.props.className .

  render() {
    return (
      <div>
       <button className={"button " + this.classes }>{this.props.children}</button>
      </div>
    );
  }
}
import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import CoolButton from './coolbutton/CoolButton';
import Form from './form/Form';

const App = () => {

  const buttonProperties = {
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
  }

  return (<div>
    <Navbar/>
    <Formfield label="Name" type="text" placeholder="e.g Alex Smith"/>
    <Formfield label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
    <CoolButton class="button is-small is-danger is-rounded my-class">Button 1</CoolButton>
    <CoolButton class="button is-small is-success">Button 2</CoolButton>
    <div>
    <Navbar/>
    <Form type="text" label="Name" placeholder="e.g. John Doe"/>
    <Form type="email" label="Email" placeholder="e.g. johndoe@email.com"/>
    <Form type="password" label="Password" placeholder="Your password goes here"/>
    <CoolButton class="button is-success">Submit</CoolButton>
    </div>
    </div>
  )
};

export default App;

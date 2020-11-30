import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolButton/CoolButton.js'
import Signup from './signup/Signup.js'

const App = () => {

  
  const buttonClass = {
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


  return (
    <div className='App'>
      <Navbar />
      <FormField label='Name' type='text' placeholder='e.g. Alex Smith' />
      <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
      <CoolButton className={buttonClass.isPrimary} title='Button 1' />
      <CoolButton className={buttonClass.isSuccess} title='Button 2' />
      <CoolButton className={buttonClass.isDanger} title='Button 3' />
      <CoolButton className={buttonClass.isWarning} title='Button 4' />
      <CoolButton className={buttonClass.isInfo} title='Button 5' />
      <Signup />
    </div>
  )
};

export default App;

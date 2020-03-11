import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import Buttons from './coolButtons/Buttons'

const App = () => {
  const formArr = [
    {label: 'Name',type: 'text', placeholder: 'e.g Alex Smith'},
    {label: 'Email',type: 'email', placeholder: 'e.g. alexsmith@gmail.com'}
  ]
  const buttonClasses = {
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
 <>
  <Navbar />
  <div className="container">
  <FormField formArr={formArr}/>
  <Buttons buttonClasses={buttonClasses}/>
  </div>
 </>

  );
};

export default App;

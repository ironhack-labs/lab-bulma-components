import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import FormField from './components/FormField/FormField'
import Button from './components/button/button'
import Message from './components/messageContainer/messageContainer'



function App() {

  const properties = {

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
      <Navbar></Navbar>
      <FormField />
      <Button text='Button1' classes='is-rounded my-class is-danger'></Button>
      <Button text='Button2' classes='is-success'></Button>
      <Button text='TEST' classes={ properties.isInverted }> </Button>
      <Message></Message>
    </>
  );
}

export default App;

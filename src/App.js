import React from 'react';
import CoolButton from './coolbutton/CoolButton.js'
import Container from './container/Container.js'
import Signup from  './signup/Signup'
import Message from  './message/Message'
import 'bulma/css/bulma.css'

const buttonsClass =Object.values({
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
})
  
const App = () => {
  return (<div>
    <Container firstElement={<Signup />} title={'Signup'}/>
    <Container firstElement={
      buttonsClass.map(element => <CoolButton size='is-small' myClass={element} name={element}/>)
    } title={'All Buttons'}/> 
    <Container firstElement={<Message type='is-info' />} title={'Message'}/>
  </div>)
};

export default App;

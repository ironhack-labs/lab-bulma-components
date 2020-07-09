import React from 'react';
import Navbar from './components/navbar/Navbar'
import FormField from './components/formfield/FormField'
import Button from './components/button/Button'
import Signup from './components//Signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <FormField 
        label="Name" 
        type="text" 
        placeholder="e.g Alex Smith" 
        />
      <FormField 
        label="Email" 
        type="email" 
        placeholder="e.g. alexsmith@gmail.com" 
      />
      <Button 
        style="is-success is-warning" 
        type="submit"
        name="Send"
      />
      <Signup />
      

    </div>
  );
};

export default App;


// const allBtns = {
//   isActive: 'is-active',
//   isBlack: 'is-black',
//   isCentered: 'is-centered',
//   isDanger: 'is-danger',
//   isDark: 'is-dark',
//   isFocused: 'is-focused',
//   isGrouped: 'is-grouped',
//   isHovered: 'is-hovered',
//   isInfo: 'is-info',
//   isInverted: 'is-inverted',
//   isLarge: 'is-large',
//   isLight: 'is-light',
//   isLink: 'is-link',
//   isLoading: 'is-loading',
//   isMedium: 'is-medium',
//   isOutlined: 'is-outlined',
//   isPrimary: 'is-primary',
//   isRight: 'is-right',
//   isRounded: 'is-rounded',
//   isSelected: 'is-selected',
//   isSmall: 'is-small',
//   isStatic: 'is-static',
//   isSuccess: 'is-success',
//   isText: 'is-text',
//   isWarning: 'is-warning',
//   isWhite: 'is-white',
// }

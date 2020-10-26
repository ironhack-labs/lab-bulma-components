///include the libraries in our project
import React from 'react'

const styles = {
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
  };


  const parse = (props) => {
    let out = 'button';
    Object.keys(props).forEach((key) => {
       if (styles[key]) {
         out += " " + styles[key];
       }
     });
    return out;
};

const CoolButton = props => {

    // let className = 'button '
    // if (props.isSmall) {
    //     className += 'is-small'
    // }
    // if (props.isDanger) {
    //     className += 'is-small'
    // }
  
  
    return (
      <div>
            <button className={parse(props)}>{props.children}</button>
      </div>
    );
  };


  export default CoolButton
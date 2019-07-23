import React, {Component } from "react";
import 'bulma/css/bulma.css';

class Coolbutton extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    
    this.state = 
    {
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
  }


getClassesFromProps = ()=>{
   let str =  this.props.className;
  
   let arrkeys = Object.keys( this.props);

 arrkeys.forEach( ele => {
   if (this.state[ele]){
    console.log("test data " + this.state[ele]);
      str = str + " " + this.state[ele];
   }
 })

  return str;
}

  render(){
       

    return (
      
        
        <a href={this.props.href} className={this.getClassesFromProps()} >{this.props.children}</a>

    
       
    );
  }
}

export default Coolbutton;
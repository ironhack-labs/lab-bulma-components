import React, { Component } from "react";


import 'bulma/css/bulma.css';
class CoolButton extends Component{

  /**
   * Gets the mapping between Bulma classes and normal classes
   **/
  getClassName(bulmaClass){
    return {
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
    }[bulmaClass]
  }



  render() {
    console.log(this.props);

    // pick the classes in the className
    let classes = this.props.className ? this.props.className.split(' ') : [];

    // convert additional classes
    for (const [key, value] of Object.entries(this.props)){
      if(key === "className" || key === "children"){
        continue;
      }

      try{
        classes.push(this.getClassName(key))
      } catch (err) {
        console.log(err);
        continue;
      }
    }

    classes.push("button");
    return (
      <span className="CoolButton">
        <button className={classes.join(' ')}>{this.props.children}</button>
      </span>
    )
  }
}


export default CoolButton;
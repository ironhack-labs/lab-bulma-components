//https://reactjs.org/docs/components-and-props.html

import React, { Component } from "react";


class CoolButton extends Component {
  
  constructor(props){
    super(props);
    this.allButtons=
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
    //we can iterate all keys of map to generate the below

    this.state={myclass:"button "};
    if (this.props.className)
      this.state={myclass:this.state.myclass+this.props.className};
    if (this.props.isDanger)
      this.state={myclass:this.state.myclass+" is-danger"};
    if (this.props.isSuccess)
      this.state={myclass:this.state.myclass+" is-success"};
    if (this.props.isSmall )
      this.state={myclass:this.state.myclass+" is-small"};
    if (this.props.isPrimary )
      this.state={myclass:this.state.myclass+" is-primary"};
  
  }

  render() {
    return (
      <button className={this.state.myclass}>{this.props.children}</button>
    );
  }
}

export default CoolButton;


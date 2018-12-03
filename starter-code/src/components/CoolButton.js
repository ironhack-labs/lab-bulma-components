import React from "react"
// import 'bulma/css/bulma.css';

class CoolButton extends React.Component {
  constructor(props){
    super(props)
    this.className = {
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
    this.clases = 'button '+ Object.keys(this.props).map((element)=>{return this.className[element]}).concat(this.props.className).join(' ');
  }
  render() {
    console.log(this.clases)
    return (
      <div className="btn-cont">
        <button className={this.clases}>{this.props.children}</button>
      </div>
    );
  }
}

export default CoolButton;
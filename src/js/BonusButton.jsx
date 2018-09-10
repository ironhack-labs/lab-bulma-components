import React from "react";

const bulmaClass = {
  initial: "is-small is-danger button is-rounded my-class",
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
  
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
  isStatic: 'is-static',
  isLoading: 'is-loading'
}
let i =0;
let newClass = ''
let newTitle = ''
class BonusButton extends React.Component {

  
handleClick() {
    console.log('this is:', this);
    console.log(i, Object.values(bulmaClass)[i]);
newClass = Object.values(bulmaClass)[i];
newTitle = Object.keys(bulmaClass)[i]
i++
 }
 constructor(){
        super();
        this.state = {
           newClass : Object.values(bulmaClass)[i]
        }
    }

    changeColor(){
        console.log(`changing`, i,Object.values(bulmaClass)[i] )
       this.setState({newClass: Object.values(bulmaClass)[i]})
       i++
    }

  render() {
              let btn_class = "button is-danger my-class"

    return (
      <div>
       <h2>BONUS BUTTON SHOWS BULMA STYLES</h2>
      <button className={this.state.newClass + " button my-class"} onClick={this.changeColor.bind(this)}>
                  {this.state.newClass}
             </button>
      </div>
    );
  }
}

export default BonusButton;
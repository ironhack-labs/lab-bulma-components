import React from 'react'

function CoolButton(props){
let x = {
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
let a
let aux = ""
a = props.className.split(" ")
for (const prop in x){
    for(let i = 0; i< a.length; i++){
        if (prop == a[i]){
            aux += x[prop] + " "
        }
        }
    }
    aux += "button my-class"
    console.log(aux)
    return(
        <>
        <button className={aux} >{props.name}</button>
        </>
    )
}

export default CoolButton
import React from "react"

const Button  = props => {

    const classNames = {
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

      const propsKeys = Object.keys(props)


    //   const classes = propsKeys.reduce((total, key)=>{
    //     if(key !== "className" || key!== "children" || key!== 'type'){
    //         return total += classNames[key] + " "
    //     }
    //   }, '')


    const classes = propsKeys.reduce((total, key)=>{
        // console.log("If statement", key, key.startsWith('is'))
        if(key.startsWith('is')=== true){
            // console.log("True statement", classNames[key])
            return total += classNames[key] + " "
        }else{
            return total
        }
      }, '')

    //   const isSmall = props.isSmall ? "is-small": "";
    //   const isDanger = props.isDanger ? "is-danger":'';
    //   const isSuccess = props.isSuccess ? "is-success":'';

    //   return isSmall +' '+ isDanger+ ' '+isSuccess;
    
    if(classes == undefined ){
        return ''
    }else{
    return classes;
    }
    
}

function CoolButton(props){
    return(
        <button type={props.type} className={`button ${props.className} ${Button(props)}`}>{props.children}</button>
    )
}

export default CoolButton;
import React from 'react'
const CoolButton = (props) =>{
    let legend=
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
    let classes = "button";
    props.classes.forEach((e,i)=>{
        Object.keys(legend).forEach((eachKey) =>{
            if (props.classes[i] === eachKey){
                classes +=` ${legend[eachKey]}`
            }
        })
    })
    
    return (
        <div>
            <button className={classes}>{props.number}</button>
        </div>
    );
}
export default CoolButton;



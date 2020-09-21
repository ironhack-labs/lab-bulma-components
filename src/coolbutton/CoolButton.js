import 'bulma/css/bulma.css';
import React from 'react'

export default function CoolButton(props) {
    const {isSmall, isDanger, isSuccess, className} = props;
   console.log(props)
    let buttonProps = 'button'
    if (isSmall){
        buttonProps+=' is-small'
    } if (isDanger){
        buttonProps+=' is-danger'
    } if (isSuccess){
        buttonProps+=' is-success'
    } if (className){
        buttonProps+= ' ' + className
    }
    console.log(buttonProps)
    return (
        <button className={buttonProps}>{props.children}</button>

       
           
    )
    // <button className="button">{props.children}</button>
    //  is-rounded my-class is-danger is-small 
    // {isSmall, isRounded, isDanger, isSuccess, className}
}


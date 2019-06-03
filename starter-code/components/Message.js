import React from 'react'


const Message = props => {
  const obj= {
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

  const getClasses = (classList,obj) => classList.map(cName => { 
      for (const key in obj) {
        if(cName === key){
          return(obj[key])
        }
      }		
    })
  
  

  const msgClassList = `message ${getClasses(_.keys(props), obj).join(' ')}`
  const {title,children} =props
  return(
    <article className={msgClassList}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body"> {children} </div>
  </article>
  )
}

export default Message
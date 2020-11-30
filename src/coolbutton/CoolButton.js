import React from 'react';
import 'bulma/css/bulma.css';

import './CoolButton.css'


const CoolButton = props => {
    let classes = "button";

    props.className ? classes += ' ' + props.className : null
    props.isActive ? classes += ' is-active' : null
    props.isBlack ? classes += ' is-black' : null
    props.isDanger ? classes += ' is-danger' : null
    props.isCentered ? classes += ' is-centered' : null
    props.isDark ? classes += ' is-dark' : null
    props.isFocused ? classes += ' is-focused' : null
    props.isGrouped ? classes += ' is-grouped' : null
    props.isHovered ? classes += ' is-hovered' : null
    props.isInfo ? classes += ' is-info' : null
    props.isInverted ? classes += ' is-inverted' : null
    props.isLarge ? classes += ' is-large' : null
    props.isLight ? classes += ' is-light' : null
    props.isLink ? classes += ' is-link' : null
    props.isLoading ? classes += ' is-loading' : null
    props.isMedium ? classes += ' is-medium' : null
    props.isOutlined ? classes += ' is-outlined' : null
    props.isPrimary ? classes += ' is-primary' : null
    props.isRight ? classes += ' is-right' : null
    props.isRounded ? classes += ' is-rounded' : null
    props.isSelected ? classes += ' is-selected' : null
    props.isSmall ? classes += ' is-small' : null
    props.isStatic ? classes += ' is-static' : null
    props.isSuccess ? classes += ' is-success' : null
    props.isText ? classes += ' is-text' : null
    props.isWarning ? classes += ' is-warning' : null
    props.isWhite ? classes += ' is-white' : null
    
    return (
        <button className={classes} type={props.buttonType}>{props.buttonText}</button>
    )
}

export default CoolButton

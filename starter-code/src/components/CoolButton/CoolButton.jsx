import React from 'react';
import allButtonClass from './allClases'

class CoolButton extends React.Component {
    render() {
        let classNames = 'button ' + this.props.className
        Object.keys(this.props).forEach(e => {
            let index = Object.keys(allButtonClass).indexOf(e)
            if (index !== -1) classNames += ' ' + Object.values(allButtonClass)[index]
        })
        return(
        <button className={classNames}>{this.props.children}</button>
    )
    }
}

export default CoolButton;
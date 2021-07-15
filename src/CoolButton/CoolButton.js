import React, { Component } from 'react';
import CoolButtonList from './CoolButtonList';
import 'bulma/css/bulma.css';

class CoolButton extends Component {
    render() {
        let ButtonVariant = ''
        for (let button in CoolButtonList) {
            if (this.props[button]) {
                ButtonVariant += `${CoolButtonList[button]}`
            }
        }
        return <button className={`button ${ButtonVariant}`}>{this.props.input}</button>

    }
}
export default CoolButton
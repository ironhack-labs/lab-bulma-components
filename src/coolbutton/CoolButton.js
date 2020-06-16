import React from 'react';

const CoolButton = (props) => {



let myClass = 'button'
myClass = myClass + (props.className ? props.className: '')
myClass = myClass + (props.isDanger ? 'is-danger': '')

    return <button class="button is-small is-success">{props.children}</button>
}

export default CoolButton;
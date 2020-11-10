import React from 'react';
import 'bulma/css/bulma.css';

function ButtonOne(props){
    return (
    <button className="button is-rounded my-class is-danger is-small">{props.text}</button>
    )
}

function ButtonTwo(props){
    return (
    <button className="button is-small is-success">{props.text}</button>
    )
}

export {ButtonOne, ButtonTwo};
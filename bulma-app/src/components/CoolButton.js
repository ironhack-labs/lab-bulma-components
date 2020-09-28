import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = props => <button type={props.submit} className={props.isSmall && props.isDanger ? 'button is-rounded my-class is-small is-danger' : 'button is-small is-success'}>{props.text}</button>



export default CoolButton


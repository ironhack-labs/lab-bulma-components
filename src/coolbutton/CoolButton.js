import React, { Fragment } from 'react';
import 'bulma/css/bulma.css';

export default function CoolButton(props) {
    console.log(props)
    return (
        <Fragment>
            <button className={props.className}>{props.children}</button>
        </Fragment>
    )
}

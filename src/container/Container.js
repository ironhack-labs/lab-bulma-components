import React from 'react';
import 'bulma/css/bulma.css';
import './Container.css'

const Container = props => {
    return (
        <section className="container">
            {props.children}
        </section>
    )
}

export default Container
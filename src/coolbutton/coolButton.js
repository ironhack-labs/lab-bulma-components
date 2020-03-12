import React from 'react';

const CoolButton = props => {
    let classList = "button";
    if (props.isPrimary) {
        classList += " is-primary"
    }
    if (props.isSuccess) {
        classList += " is-success"
    }
    if (props.isDanger) {
        classList += " is-danger"
    }
    if (props.isRounded) {
        classList += " is-rounded"
    }
    if (props.isLink) {
        classList += " is-link"
    }
    return (
        <>
            <button class={classList}>{props.cta}</button>
        </>
    );
};

export default CoolButton;
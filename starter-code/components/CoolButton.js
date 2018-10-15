import React from "react";

const coolButton = (props) => {
    return (
        <div>
            <button className={props.className}>{props.buttonName}</button>
            {/* <button className="button is-rounded my-class is-danger is-small">Button 1</button>
            <button className="button is-small is-success">Button 2</button> */}
        </div>
    )
}

export default coolButton;
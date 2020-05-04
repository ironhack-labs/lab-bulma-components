import React from "react";
import "bulma/css/bulma.css";

const CoolButton = () => {
    return (
        <>
            <button className="button is-centered is-rounded my-class is-danger is-small">Reset</button>
            <button className="button is-small is-success">Send</button>
        </>
    )
  }
export default CoolButton;
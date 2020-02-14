import React from "react";

const CoolButton = (props) => {
    const clases = {
        isSmall: "is-small",
        isDanger: "is-danger",
        isSuccess: "is-success"
    };

    const formatClass = (props) => {
        return `button`;
    };
    return (
        <button className={formatClass(props)}>Button 1</button>
    );
};

export default CoolButton;
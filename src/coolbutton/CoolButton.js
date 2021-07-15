import React from "react";
import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

const CoolButton = (props) => {
    return (
        <React.Fragment>
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </React.Fragment>
    );
};

export default CoolButton;

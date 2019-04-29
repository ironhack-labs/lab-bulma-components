import React from "react";

let Container = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}


export default Container;
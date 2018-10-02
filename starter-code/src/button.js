import React from "react";
import 'bulma/css/bulma.css';

export const CoolButton = (isRounded, isSmall, isDanger, isSuccess, isPrimary) => {
    /* let myclass= {
        isRounded: "is-rounded",
        isSmall: "is-small",
        isDanger: "is-danger",
        isSuccess: "is-success"
    } */
    function formatName(className) {
            return className;
        }
          
    const user = {
            firstName: 'Harper',
            lastName: 'Perez',
          };
    
    return (
        <button className={isRounded}>{props.children}</button>
    )
} 
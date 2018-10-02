import React from "react";
import 'bulma/css/bulma.css';

export const CoolButton = (isRounded, isSmall, isDanger=false, isSuccess, isPrimary, className) => {
    let myclass= {
        isRounded: "button is-rounded",
        isSmall: "button is-small",
        isDanger: "button is-danger",
        isSuccess: "button is-success"
    }
    if ({isDanger}){
        return (
            <button className={myclass.isDanger}>Content</button>
        )

    } else {
        return (
            <button className={myclass.isSuccess}>Content</button>
        )

    }
} 
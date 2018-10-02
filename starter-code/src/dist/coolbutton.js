import React from "react";

const CoolGreenButton = (params) => {
    return (
        <div>
            <button class="button is-rounded my-class is-danger is-small">{params.name}</button>
        </div>
    )
}

const CoolRedButton = (params) => {
    return (
        <div>
            <button class="button is-small is-success">{params.name}</button>
        </div>
    )
}

module.exports = CoolGreenButton
module.exports = CoolRedButton
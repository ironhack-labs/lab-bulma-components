import React from "react";
import CoolButton from "./CoolButton";


export default () => {
    return(
    <div>
        <label className="label">Name</label>
        <input label="Name" type="text" placeholder="e.g Alex Smith" />

        <label className="label">Email</label>
        <input label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <label className="label">Password</label>
        <input label="Email" type="password" placeholder="Your pwd" />
        <CoolButton clase="button is-success" content="Submit" />
    </div>
    )
}



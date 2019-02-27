import React from "react";


export default () => {
    return(
    <div>
        <label className="label">Name</label>
        <input label="Name" type="text" placeholder="e.g Alex Smith" />

        <label className="label">Email</label>
        <input label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
    )
}


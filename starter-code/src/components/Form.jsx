import React from 'react'


const Form = () =>{
    return (
        <div>
            <form>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input label="Name" type="text" placeholder="e.g Alex Smith" />
                </div>
            </div>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input label="Password" type="password" placeholder="Password" />
                </div>
            </div>
            </form>
        </div>
    )
}


export default Form


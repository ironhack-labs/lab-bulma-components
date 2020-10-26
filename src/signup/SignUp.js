import React from 'react'

export default function SignUp() {
    return (
        <form>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type='text' placeholder='Enter your name' />
             </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type='email' placeholder='Enter your email' />
             </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type='password' placeholder='enter your desired password' />
             </div>
            </div>
        <div>
            <button className="button is-large" type="submit">Login</button>
        </div>
        </form>
    )
}

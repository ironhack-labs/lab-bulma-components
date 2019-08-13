import React from 'react'
import FormField from './FormField';
import CoolButton from './CoolButton';


const Signup = () => {

    return (

        <div>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Alex Smith" />
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                </div>

                <button class="button is-rounded my-class is-danger is-small">Signup</button>

            </div>
        </div>

    )
}

export default Signup
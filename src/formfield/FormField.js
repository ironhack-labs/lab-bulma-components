import React from 'react';
import 'bulma/css/bulma.css';
import { Fragment } from 'react';

export default function FormField(props) {
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
        // <div>
        //     <div class="field">
        //         <label class="label">Name</label>
        //         <div class="control">
        //             <input class="input" type="text" placeholder="e.g Alex Smith" />
        //         </div>
        //     </div>

        //     <div class="field">
        //         <label class="label">Email</label>
        //         <div class="control">
        //             <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        //         </div>
        //     </div>
        // </div>
    );
}

import React, { Fragment } from 'react'

export default function FormField(props) {
    return (
        <Fragment>
            <div className='field'>
                <label className='label'>{props.label}</label>
                <div className="control">
                    <input className="input" type="text" placeholder={props.placeholder} />
                </div>
            </div>

        </Fragment>
    )
}

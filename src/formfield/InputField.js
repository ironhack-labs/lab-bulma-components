import React from 'react'

const InputField = ({eachInput}) => {
    // console.log("-> eachInput", eachInput)
    return (
        <div className="field">
            <label className='label' >{eachInput.label}</label>
            <div className='control'>
                <input className="input" type={eachInput.type} placeholder={eachInput.placeholder} />
            </div>
        </div>
    )
}


export default InputField;
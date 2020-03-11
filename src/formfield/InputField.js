import React from 'react'

const InputField = ({eachInput}) => {
    // console.log("-> eachInput", eachInput)
    return (
        <div className="form-group">
            <label >{eachInput.label}</label>
            <input className="form-control" type={eachInput.type} placeholder={eachInput.placeholder} />
        </div>
    )
}


export default InputField;
import React from 'react'

const CoolButton = props => {
    let x = ""
    let classNames = props.className
    Object.keys(props).forEach(prop => {
        if (prop != "className" && prop != "children") {
            x += (prop.slice(0, 2) + "-" + prop.slice(2)).toLowerCase() + " "
        }
    })
    if (!classNames) {
        classNames = ""
    }
    return (
        <>
            <button className={"button " + x + classNames}>{props.children}</button>
        </>
    )
}

export default CoolButton
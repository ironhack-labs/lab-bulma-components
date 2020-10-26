import React from 'react'

export default function CoolButton(props) {
    //avoiding undefined
    let className = 'button '
    if (props.className) className = props.className+' button '

    for(let key in props){
        // console.log(props[key])
        if (props[key] === true) {
            //Use of regex which i cannot read ://///////////////// https://regex101.com/ didnt help too much, cant read it
            className += key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase() + ' ';
        }
        // console.log(className)
    }
    return (
        <div>
            <button className={className}>{props.children}</button>
        </div>
    )
}

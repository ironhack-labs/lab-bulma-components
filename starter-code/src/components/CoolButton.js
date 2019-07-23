import React from 'react';


const CoolButton = (props) => {


    return (
        <p className="control">
           
            <a className={props.className}  href={props.href}>
                <span>
                    {props.name}
                </span>
            </a>
        </p>
        
    );
}

export default CoolButton;
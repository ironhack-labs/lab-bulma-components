import React from 'react';
import 'bulma/css/bulma.css'
import {isClassName} from '../../isClassName';

const CoolButton = (props) => {

    let classResult = '';
    if(props.arialLabel){
        classResult = "delete"; 
    } else {
        classResult = "button ";
        for(let prop in props){
            if(isClassName[prop]){
                classResult += ' '+isClassName[prop];
            }
        }
    }
    
    
    

    return (
        <button aria-label={ props.arialLabel || "" } type={props.type} className={classResult}>{props.children}</button>
    )
}

export default CoolButton;
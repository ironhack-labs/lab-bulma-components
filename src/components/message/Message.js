import React from 'react';
import CoolButton from '../coolButton/CoolButton';
import {isClassName} from '../../isClassName';

const Message = (props) => {

    let classResult = '';

    for(let prop in props){
        if(isClassName[prop]){
            classResult +=  ' ' + isClassName[prop];
            console.log(classResult)
        }
    }

    return(
        <article className={"message "+classResult+" mt-5"}>
            <div className="message-header">
                <p>{props.title}</p>
                <CoolButton basicClass="delete" arialLabel="delete"/>
            </div>
            <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
            </div>
        </article>
    );
}

export default Message;
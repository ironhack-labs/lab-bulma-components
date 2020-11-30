import React, {Fragment} from 'react';
import 'bulma/css/bulma.css';

export default function coolButton(props) {

        return (
            
             <div>

                <button className={"button" + props.className} type={props.type}> {props.title} </button>
            
            </div>
           
        );
    
}


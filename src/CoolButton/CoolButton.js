import React from 'react';



function CoolButton(props){
    return(
        <div className='coolButton'>
        <button className="button is-rounded my-class is-danger is-small">{props.name}</button>
        </div> 
    )
}

export default CoolButton
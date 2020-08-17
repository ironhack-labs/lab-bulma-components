import React from 'react'

function CoolButton(props){
 
        let LogInClass = "button is-rounded my-class is-danger is-small";
        let SignUpClass="button is-small is-success";
        if( props.isSmall == true && props.isDanger == true )
        {
            return( 
                <div>
                    <button className={LogInClass}> {props.name}</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <button className={SignUpClass} >{props.name}</button>
                </div>
            )
    
        }
}

export default CoolButton
import React from 'react'


function CoolButton (props){
    console.log('props')
    let LogInClass = "button is-rounded my-class is-danger is-small";
    let SignUpClass="button is-small is-success";
    if( props.isSmall == true && props.isDanger == true )
    {
        return(
            <div>
                <button className={LogInClass}> Log In</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <button className={SignUpClass}> SignUp</button>
            </div>
        )

    }
    
};

export default CoolButton 
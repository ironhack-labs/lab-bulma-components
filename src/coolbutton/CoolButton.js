import React from 'react';

function CoolButton(props) {
    return(
        <div>
            < button className = {`button ${Object.values(props).slice(0, -1).join(' ')}`} > {props.children}</ button > 
            
            


        </div>




    )
}











export default CoolButton;
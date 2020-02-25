import React, {Component} from 'react';



function CoolButton(){

    return(

        <div>
               <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
    )
}


// class CoolButton extends Component(){

//     render(){
        
//         <div>
//         <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
//         <CoolButton isSmall isSuccess>Button 2</CoolButton>
//         </div>



        
       

//     }
// }

export default CoolButton;

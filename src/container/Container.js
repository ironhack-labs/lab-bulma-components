 import React from "react";
 import Message from "./Message.js"


 
 
 class Container extends React.Component {
     render() {
         return (
             <div>
               <div>
            <article class="message">
  <div class="message-header">
    <p>Hello World</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    <Message /> 
  </div>
</article>
                
            </div>   
             </div>
         )
     }
 }



 export default Container;
 
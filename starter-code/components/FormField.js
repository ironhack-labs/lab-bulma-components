import React, { Component } from 'react'
//import "./navbar.css" aqui pongo la hoja de estilo de este componente
//
// export default  class FormField extends Component {
// render (props) {
//       return (
//         <div class="field">
//           <label class="label">Name</label>
//           <div class="control">
//             <input class="input" type="text" placeholder={props.placeholder} />
//           </div>
//         </div>
//       );
//     }
//   };

function FormField (props){
  return (
    <div className="field">
         <label className="label">{props.Name}</label>
           <div className="control">
               <input className="input" type={props.type} placeholder={props.placeholder} />
             </div>
         </div>
       )
}
export default FormField

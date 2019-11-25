import React from "react";

const placeholder = {
    email: "e.g. alexsmith@gmail.com",
    text: "e.g Alex Smith"
}

// const Name = props => {
//   return (
//     <div className="field">
//       <label className="label">Name</label>
//       <div className="control">
//         <input className="input" type="text" placeholder="e.g Alex Smith" />
//       </div>
//     </div>
//   );
// };



const FormField = props => {
    console.log(props);
  return (
    <div className="field">
      <label className="label">{props.children}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

// const FormField = props => {
//   return (
//     <div>
//       <Name />
//       <Email />
//     </div>
//   );
// };
// What is rendered in the DOM

// JSX version
{
  /* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */
}



export default FormField;

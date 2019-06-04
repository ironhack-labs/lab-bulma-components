import React from "react"
import 'bulma/css/bulma.css';


const button = (props) => {
  
// function classNames(classes) {
  // console.log(Object.entries(classes))
//   return Object.entries(classes)
//     .filter(([key, value]) => value)
//     .map(([key, value]) => key)
//     .join(' ');
// }

//   const buttonClasses = {
//     'isSuccess': props.isSuccess,
//     'isSmall': props.isSmall,
//     'isDanger': props.isDanger,
//     'isRounded': props.isRounded,
//     'myClass': props.className
//   }

//   const myClassNames = classNames(buttonClasses);
// console.log(props)

  return (
    <button  className={"button " + props.names.map(e => e).join(" ")}>{props.children}</button>
  )
}

export default button
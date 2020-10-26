import React from 'react'

export default function CoolButton(props) {
    console.log(props);

    let classes = Object.keys(props).filter(e => props[e] === true);
    classes = classes.map((elem) => { return createClassName(elem) });
    classes = classes.join(" ");

    return (
        <button className={"button " + classes} type={props.type}>
            <a className={"button " + classes} href={props.linkTo}>
                <span>
                    {props.text}
                </span>
            </a>
        </button>
    )
}

const createClassName = (input) => {
    return "is-" + input.slice(2).toLowerCase();
}

// orig solution
// export default function CoolButton(props) {
//     let classes = props.class.split(" ")
//     classes = classes.map((elem) => {return createClassName(elem)});
//     classes = classes.join(" ");
//     return (
//         <a className={"button " + classes} href={props.linkTo}>
//             <span>
//                 {props.text}
//               </span>
//         </a>
//     )
// }
import React from 'react'

export default function Button(props) {
    
    return (
        <div>
            <button
                className={props.style}
                type={props.type}
            >
                {props.name}
            </button>
        </div>
    )
}

// export default function Button(props) {
    
//     return (
//         <div>
//             <button
//                 className="button is-primary is-light is-small"
//                 type={props.type}
//             >
//                 {props.name}
//             </button>
//         </div>
//     )
// }

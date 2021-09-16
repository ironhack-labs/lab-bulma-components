import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './Message.css';


class Message extends Component {
    render() {
        return this.props.isInfo ?(
            <article class="message is-info">
                <div class="message-header">
                    <p>{this.props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">{this.props.children}</div>
            </article>
        ) : (
            <div></div>
        )
    }
}





// const FormField = (props) => {
//   return (
//     <div className="field column is-half">
//       <label className="label">{props.label}</label>
//       <div className="control">
//         <input
//           className="input"
//           type={props.type}
//           placeholder={props.placeholder}
//         />
//       </div>
//     </div>
//   );
// };




export default Message;
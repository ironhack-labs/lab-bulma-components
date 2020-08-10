import React from 'react';
import 'bulma/css/bulma.css';



const Message = (props) => {
    console.log('props',props)

    const propsNamesArr = Object.keys(props);

    propsNamesArr.forEach((name)=>{
        /* if(!object[name]){
            
        } */
    
    })
    console.log(propsNamesArr)
    return (
        <article className="message is-medium">
         <div className="message-header">
            <p>{props.title}</p>
            <button className="delete is-medium" aria-label="delete"></button>
        </div>
        <div className="message-body">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
        </article>
    )

}

export default Message

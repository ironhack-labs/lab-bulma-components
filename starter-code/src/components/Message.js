import React from 'react';
import customization from '../helpers/customization';

const Message = (props) => {
  const propArr = [];
  const addProps = () => {
    for (let [key, value] of Object.entries(customization)) {
      if(props.hasOwnProperty(key)) {
        propArr.push(value);
      }
    };
  };

  console.log(propArr);

  addProps();

  return (
    <article className={propArr.join(' ').concat(' message')}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );
};

export default Message;

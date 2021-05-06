import React from 'react';
import './Message.css';

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function dashToCamelCase(myStr) {
  return myStr.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

const App = (props) => {
  let addedClass = Object.keys(props).reduce((acc, cur) => {
    if (cur == 'className') return acc + ' ' + props[cur];
    if (typeof props[cur] === 'boolean')
      return acc + ' ' + camelCaseToDash(cur);
    return acc;
  }, 'message');
  return (
    <article className={addedClass}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};

export default App;

/*
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <strong>Pellentesque risus mi</strong>.
      </Message>
      */

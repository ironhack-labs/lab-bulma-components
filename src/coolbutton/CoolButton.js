import React from 'react';

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function dashToCamelCase(myStr) {
  return myStr.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

const App = (props) => {
  //console.log(props);

  let addedClass = Object.keys(props).reduce((acc, cur) => {
    if (cur == 'className') return acc + ' ' + props[cur];
    if (cur == 'children') return acc;
    return acc + ' ' + camelCaseToDash(cur);
  }, 'button');
  return <button className={addedClass}>{props.children}</button>;
};

export default App;

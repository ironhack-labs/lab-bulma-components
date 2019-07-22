import React, { Fragment } from 'react';
import customization from '../helpers/customization';

const CoolButton = (props) => {
  const propArr = [];

  const addProps = () => {
    for (let [key, value] of Object.entries(customization)) {
      if(props.hasOwnProperty(key)) {
        propArr.push(value);
      }
    };
  }

  addProps();

  return (
    <Fragment>
      <button className={'button ' + propArr.join(' ').concat(' ', props.className)}>{props.children}</button>
    </Fragment>
  );
};

export default CoolButton;

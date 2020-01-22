/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const CoolButton = (props) => {
  const className = ['button'];

  if (props.className) {
    className.push(props.className);
  }

  if (props.isDanger) {
    className.push('is-danger');
  }

  if (props.isSuccess) {
    className.push('is-success');
  }

  if (props.isSmall) {
    className.push('is-small');
  }

  return (
    <button className={className.join(' ')} type="button">{props.children}</button>
  );
};

export default CoolButton;

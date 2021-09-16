import React from 'react';

export default function CoolButton({isDanger, isSuccess, className, children}) {
  return (
    <button
      className={`button is-small ${className} ${isDanger ? 'is-danger' : ''} ${
        isSuccess ? 'is-success' : ''
      }`}
    >
      {children}
    </button>
  );
}

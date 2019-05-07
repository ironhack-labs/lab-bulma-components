import React from 'react';

function CoolButton(props) {
  /* Caso exista dois botões com classes diferentes, usar essa condição, cada btn fica com sua formatação
    if (props.isSmall && props.isSuccess) {
    return <button className="button is-large">{props.children}</button>;
    } */
  return <button className={props.className}>{props.children}</button>;
}

export default CoolButton;

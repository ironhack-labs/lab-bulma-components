import React from 'react';
// isso vai estar disponível pra ser chamado?
import ParseBulmaMod from '../utils/ParseBulmaMods';

const CoolButton = (props) => {
  const {children, href, target} = props

  const modValuesString = ParseBulmaMod(props);
  return (
    // TODO: já que o exercício pede para usar nos botões do login, eu mantive como um <a>. Entendo que para usar a <button> no exercício, e redirecionar para /signup, precisaria ser um button com type=submit contido num form com action="/signup"! Sendo que precisaria ter um onclick callback para evitar reload da página. Certo? O que você acha?
    <a className={`button ${modValuesString}`} href={href}>
    <span>{children}</span>
  </a>
  )

}

export default CoolButton;
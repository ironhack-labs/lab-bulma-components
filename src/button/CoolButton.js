//Importar react
import React from "react";

//Construir el componente
const CoolButton = props => {
  return (
    <div>
      <button className={props.classes}>{props.value}</button>
    </div>
  );
};

//Exportar componente
export default CoolButton;

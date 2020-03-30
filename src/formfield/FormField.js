//Importar react
import React from "react";

//Construir el componente
const FormField = (props) => {
  return (
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
  );
};

//Exportar componente
export default FormField;
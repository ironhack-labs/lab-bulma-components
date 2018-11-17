import React, { Component } from "react";
import "../public/styles/styles.css";
import CoolButton from "./CoolButton";

const FormField = ({iLabel, placeHolder, iType}) => (
  <div className="forms">
    <div className="field">
      <label className="label">{iLabel}</label>
      <div className="control">
        <input className="input" type={iType} placeholder={placeHolder} />
      </div>
    </div>
  </div>
);

export default FormField;

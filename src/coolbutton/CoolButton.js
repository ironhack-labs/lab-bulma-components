import React from "react";
import "./CoolButton.css";
import "bulma/css/bulma.css";
import { classes } from "../colors/Colors";

const CoolButton = (props) => {
  //   //Variable con todas las clases posibles
  //   var classes = {
  //     isActive: "is-active",
  //     isBlack: "is-black",
  //     isCentered: "is-centered",
  //     isDanger: "is-danger",
  //     isDark: "is-dark",
  //     isFocused: "is-focused",
  //     isGrouped: "is-grouped",
  //     isHovered: "is-hovered",
  //     isInfo: "is-info",
  //     isInverted: "is-inverted",
  //     isLarge: "is-large",
  //     isLight: "is-light",
  //     isLink: "is-link",
  //     isLoading: "is-loading",
  //     isMedium: "is-medium",
  //     isOutlined: "is-outlined",
  //     isPrimary: "is-primary",
  //     isRight: "is-right",
  //     isRounded: "is-rounded",
  //     isSelected: "is-selected",
  //     isSmall: "is-small",
  //     isStatic: "is-static",
  //     isSuccess: "is-success",
  //     isText: "is-text",
  //     isWarning: "is-warning",
  //     isWhite: "is-white",
  //   };

  //Varuable que usaremos para almanecer todas nuestras clases
  var myClasses = props.className + " button";

  //Hacemos un forEach en todas las clases de encima. Si es "true" lo añadimos a las variable creada justo antes (con un " " para separar cada clase añadida)
  Object.keys(props).forEach((prop) => {
    if (classes[prop]) {
      myClasses += " " + classes[prop];
    }
  });

  //Añadimos la variable myClasses como classe
  return <a className={myClasses}>{props.children}</a>;
};

export default CoolButton;

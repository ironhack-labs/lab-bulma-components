import React, { Component } from "react";
import Navbar from "./Navbar";
import Formfield from "./Formfield.js";
import CoolButton from "./CoolButton.js";
import AllButtons from "./AllButtons.js";

export default class App extends Component {
  constructor(props){
    super();
    this.modes = {
      isActive: "is-active",
      isBlack: "is-black",
      isCentered: "is-centered",
      isDanger: "is-danger",
      isDark: "is-dark",
      isFocused: "is-focused",
      isGrouped: "is-grouped",
      isHovered: "is-hovered",
      isInfo: "is-info",
      isInverted: "is-inverted",
      isLarge: "is-large",
      isLight: "is-light",
      isLink: "is-link",
      isLoading: "is-loading",
      isMedium: "is-medium",
      isOutlined: "is-outlined",
      isPrimary: "is-primary",
      isRight: "is-right",
      isRounded: "is-rounded",
      isSelected: "is-selected",
      isSmall: "is-small",
      isStatic: "is-static",
      isSuccess: "is-success",
      isText: "is-text",
      isWarning: "is-warning",
      isWhite: "is-white"
    };
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="newForm">
          <Formfield label="Name" type="text" placeholder="e.g. Alex Smith" />
          <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <div className="buttons">

        {/* Draw Two First Buttons, as in exercise */}
        {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton> */}


        {/* Draw all possible button styles */}
        {Object.values(this.modes).map((element, idx) => {
        return <CoolButton button={element}>Button {idx}</CoolButton>})}
        {/* <AllButtons></AllButtons> */}
        </div>
      </div>
    );
  }
}

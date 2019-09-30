import NavBar from "./components/NavBar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Signup from "./components/Signup";

import React, { Component } from "react";
import Message from "./components/Message";

export default class App extends Component {
  constructor(props) {
    super();
    this.buttons ={
      isActive: 'is-active',
      isBlack: 'is-black',
      isCentered: 'is-centered',
      isDanger: 'is-danger',
      isDark: 'is-dark',
      isFocused: 'is-focused',
      isGrouped: 'is-grouped',
      isHovered: 'is-hovered',
      isInfo: 'is-info',
      isInverted: 'is-inverted',
      isLarge: 'is-large',
      isLight: 'is-light',
      isLink: 'is-link',
      isLoading: 'is-loading',
      isMedium: 'is-medium',
      isOutlined: 'is-outlined',
      isPrimary: 'is-primary',
      isRight: 'is-right',
      isRounded: 'is-rounded',
      isSelected: 'is-selected',
      isSmall: 'is-small',
      isStatic: 'is-static',
      isSuccess: 'is-success',
      isText: 'is-text',
      isWarning: 'is-warning',
      isWhite: 'is-white',
    }
  }

  render() {
    return (
      <div class="app">
        <Signup></Signup>
        {Object.values(this.buttons).map((button,idx) => (
          <CoolButton
            btn={button}

          >Button {idx}</CoolButton>
        ))}
        <Message title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
      </div>
    );
  }
}

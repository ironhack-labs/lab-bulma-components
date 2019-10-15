import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <a
        className={
          "button " +
          this.props.className +
          (this.props.isSmall ? " is-small " : "") +
          (this.props.isRounded ? " is-rounded " : "") +
          (this.props.isDanger ? " is-danger " : "") +
          (this.props.isSuccess ? " is-success " : "") +
          (this.props.isActive ? " is-active " : "") +
          (this.props.isCentered ? " is-centered " : "") +
          (this.props.isBlack ? " is-black " : "") +
          (this.props.isDark ? " is-dark " : "") +
          (this.props.isDanger ? " is-danger " : "") +
          (this.props.isGrouped ? " is-grouped " : "") +
          (this.props.isFocused ? " is-focused " : "") +
          (this.props.isHovered ? " is-hovered " : "") +
          (this.props.isInfo ? " is-info " : "") +
          (this.props.isInverted ? " is-inverted " : "") +
          (this.props.isLarge ? " is-large " : "") +
          (this.props.isLight ? " is-light " : "") +
          (this.props.isLink ? " is-link " : "") +
          (this.props.isLoading ? " is-loading " : "") +
          (this.props.isMedium ? " is-medium " : "") +
          (this.props.isOutlined ? " is-outlined " : "") +
          (this.props.isPrimary ? " is-primary " : "") +
          (this.props.isRight ? " is-right " : "") +
          (this.props.isRounded ? " is-rounded " : "") +
          (this.props.isSelected ? " is-selected " : "") +
          (this.props.isSmall ? " is-small " : "") +
          (this.props.isStatic ? " is-static " : "") +
          (this.props.isSuccess ? " is-success " : "") +
          (this.props.isText ? " is-text " : "") +
          (this.props.isWarning ? " is-warning " : "") +
          (this.props.isWhite ? " is-white " : "")
        }
      >
        {this.props.children}
      </a>
    );
  }
}

export default CoolButton;

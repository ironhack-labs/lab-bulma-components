import React from "react";

function CoolButton({
  isActive,
  isBlack,
  isCentered,
  isDanger,
  isDark,
  isFocused,
  isGrouped,
  isHovered,
  isInfo,
  isInverted,
  isLarge,
  isLight,
  isLink,
  isLoadind,
  isMedium,
  isOutlined,
  isPrimary,
  isRight,
  isRounded,
  isSelected,
  isSmall,
  isStatic,
  isSuccess,
  isText,
  isWarning,
  isWhite,
  text
}) {
  let classs = "button ";

  isPrimary ? (classs += "is-small") : "";
  isSuccess ? (classs += "is-success") : "";
  isDanger ? (classs += "is-danger") : "";
  isSmall ? (classs += "is-small") : "";
  isActive ? (classs += "is-active") : "";
  isBlack ? (classs += "is-black") : "";
  isCentered ? (classs += "is-centered") : "";
  isDark ? (classs += "is-dark") : "";
  isFocused ? (classs += "is-focused") : "";
  isGrouped ? (classs += "is-grouped") : "";
  isHovered ? (classs += "is-hovered") : "";
  isInfo ? (classs += "is-info") : "";
  isInverted ? (classs += "is-inverted") : "";
  isLarge ? (classs += "is-hovered") : "";
  isLight ? (classs += "is-light") : "";
  isLink ? (classs += "is-link") : "";
  isLoadind ? (classs += "is-loading") : "";
  isMedium ? (classs += "is-medium") : "";
  isOutlined ? (classs += "is-outlined") : "";
  isRight ? (classs += "is-right") : "";
  isRounded ? (classs += "is-rounded") : "";
  isSelected ? (classs += "is-selected") : "";
  isStatic ? (classs += "is-static") : "";
  isText ? (classs += "is-text") : "";
  isWarning ? (classs += "is-warning") : "";
  isWhite ? (classs += "is-white") : "";

  return <a class={classs}>{text}</a>;
}

export default CoolButton;

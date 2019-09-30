import React from "react";
import classnames from 'classnames';

function CoolButton(props) {
  const {
    isSmall, 
    isDanger,
    isSuccess, 
    isLink,
    isRounded,
    isMedium,
    isOutlined,
    children
  } = props;

  const strg = classnames("button", { 
    "is-small": isSmall, 
    "is-danger": isDanger,
    "is-success": isSuccess,
    "is-link": isLink,
    "is-medium": isMedium,
    "is-outlined": isOutlined,
    "is-rounded": isRounded
  })

  return (
    <button className={strg}>
      {children}
    </button>
  );
}

export default CoolButton;
import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "./CoolButton";

const Message = ({ className, title, children, ...rest }) => {
  const allStyles = {
    isDark: "is-dark",
    isPrimary: "is-primary",
    isLink: "is-link",
    isInfo: "is-info",
    isSuccess: "is-success",
    isWarning: "is-warning",
    isDanger: "is-danger",
    isLarge: "is-large",
    isMedium: "is-medium",
    isSmall: "is-small",
  };

  let messageClasses = className;
  messageClasses === undefined
    ? (messageClasses = [])
    : (messageClasses = messageClasses.split(" "));

  messageClasses.unshift("message");

  Object.keys(rest).forEach((el) => messageClasses.push(allStyles[el]));
  let buttonClass = messageClasses[messageClasses.length - 1];

  messageClasses = messageClasses.join(" ");

  return (
    <div>
      <article className={`${messageClasses}`}>
        <div className="message-header">
          <p>{title}</p>
          <CoolButton
            isRounded
            className={`${buttonClass}` + " delete"}
            aria-label="delete"
          ></CoolButton>
        </div>
        <div className="message-body">{children}</div>
      </article>
    </div>
  );
};

export default Message;

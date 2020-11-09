import React from 'react';
import 'bulma/css/bulma.css';

// const CoolButton = props => {
//     return (
//         <div>
//         <button className='{props.className}'>{props.name}</button>
//         </div>
//     )}



    const dictionary = {
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
        isWhite: "is-white",
      };


      function CoolButton(props) {

        let classes = `button ${props.className}`;
        Object.keys(props).forEach((key) => {
          if (dictionary[key]) {
            classes += " " + dictionary[key];
          }
          console.log("key", key);
          console.log(dictionary[key]);
        });
        return (
            <button className={props.className}><a href="{props.href}">{props.name}</a></button>
        )
      }


export default CoolButton;
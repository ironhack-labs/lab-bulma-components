import React from 'react';

const coolButtonClasses = {
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
};

const App = (props) => {
  //console.log(props);

  let addedClass = Object.keys(props).reduce((acc, cur) => {
    if (cur == 'className') return acc + ' ' + props[cur];
    if (props[cur] && coolButtonClasses[cur])
      return acc + ' ' + coolButtonClasses[cur];
    return acc;
  }, 'button');
  let buttonType = props.type ? 'type="' + props.type + '"' : '';
  return (
    <button className={addedClass} type={props.type}>
      {props.children}
    </button>
  );
};

export default App;

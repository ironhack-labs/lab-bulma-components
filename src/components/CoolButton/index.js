import React, {Fragment} from 'react';

function FormField(props) {

  const classNames = [];
  if(props.isSmall) classNames.push('is-small');
  if(props.isActive) classNames.push('is-active');
  if(props.isBlack) classNames.push('is-black');
  if(props.isCentered) classNames.push('is-centered');
  if(props.isDanger) classNames.push('is-danger');
  if(props.isDark) classNames.push('is-dark');
  if(props.isFocused) classNames.push('is-focused');
  if(props.isGrouped) classNames.push('is-grouped');
  if(props.isHovered) classNames.push('is-hovered');
  if(props.isInfo) classNames.push('is-info');
  if(props.isInverted) classNames.push('is-inverted');
  if(props.isLarge) classNames.push('is-large');
  if(props.isLight) classNames.push('is-light');
  if(props.isLink) classNames.push('is-link');
  if(props.isLoading) classNames.push('is-loading');
  if(props.isMedium) classNames.push('is-medium');
  if(props.isOutlined) classNames.push('is-outlined');
  if(props.isPrimary) classNames.push('is-primary');
  if(props.isRight) classNames.push('is-right');
  if(props.isRounded) classNames.push('is-rounded');
  if(props.isSelected) classNames.push('is-selected');
  if(props.isSmall) classNames.push('is-small');
  if(props.isStatic) classNames.push('is-static');
  if(props.isSuccess) classNames.push('is-success');
  if(props.isText) classNames.push('is-text');
  if(props.isWarning) classNames.push('is-warning');
  if(props.isWhite) classNames.push('is-white');
  classNames.push(props.className);

  return (
    <Fragment>
      <button className={"button my-class " + classNames.join(' ')}>
        {props.children}
      </button>
    </Fragment>
  );
}

export default FormField;
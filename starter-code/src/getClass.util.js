export default function getClass(props) {
   
  const types = {
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

  const typeSelected = [];
  let valueAux;
 
  Object.keys(types).forEach(type => {
    valueAux = types[Object.keys(props).filter(prop => type === prop)];
    if(valueAux) typeSelected.push(valueAux);
  })
  
  const classSTR = (props.className) ?
              props.className + ' ' + typeSelected.join(' ') : 
              typeSelected.join(' ');

  return classSTR;
}
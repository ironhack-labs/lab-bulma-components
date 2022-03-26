
    // prop name:  bulma class name

    const bulmaClasses= {
      isCentered: 'is-centered',
      isActive: 'is-active',
      isBlack: 'is-black',
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
      isWhite: 'is-white'

}

const CoolButton = (props) => {
    console.log('coolbutton props:', props);
    
    const bulmaProps = Object.keys(props)
    .filter(key => key != "children" )
    .map(bulmaClassKey => bulmaClasses [bulmaClassKey])
    .join(' ');


return (
<button
className={`button ${bulmaProps}`}>
{props.children}
</button>
)
}

export default CoolButton
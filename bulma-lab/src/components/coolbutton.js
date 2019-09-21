import React from 'react';

export default class Coolbutton extends React.Component {

    render() {

        // let classes = "button";
        // if(this.props.isSmall){
        //     classes +=" is-small"
        // }
        // if(this.props.isRounded){
        //     classes +=" is-rounded"
        // }
        // if(this.props.isDanger){
        //     classes +=" is-danger"
        // }
        // if(this.props.isSuccess){
        //     classes +=" is-success"
        // }
        // ^ this is a simpler version thats totally fine if you dont have that many possibilites for clases being passed in
        // if you have a lot of classes though, use the thing belo

        let legend = {
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

        // Every button must have this class
        let classes = "button"

        // Here we will Check if any of the keys in the legend object are passed in the prop
        Object.keys(legend).forEach((eachKey) => {

            // If the prop is passed a name that is found on our list of possible classes
            if (this.props[eachKey]) {

                // Append the class name 
                classes += " " + legend[eachKey]
            }
        })

        return (
            <button style={{ margin: "20px" }} className={classes}>

                Submit

            </button>
        )

    }

}
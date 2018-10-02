import React from "react";

const buttonClasses = {
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

const FormField = ({label, type, placeholder}) => {
    return(
    <div className="field form">
        <label className="label">{label}</label>
        <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
        </div>
    </div>
    )
}

class CoolButton extends React.Component {
    render() {
        let classesInProps = Object.keys(this.props).map(e => buttonClasses[e]).join(" ")
        let {className} = this.props;
        let classes = ` button + ${classesInProps}`;
        return <button className={className + classes}>{this.props.children}</button>
    }
}

export const App = () => {
    return(
        <div>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                    </a>
                    <div className="navbar-burger burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <CoolButton isInfo>Login</CoolButton>
                            </p>
                            <p className="control">
                                <CoolButton isPrimary>Signup</CoolButton>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Password" />
            <CoolButton className="is-rounded" isBlack>Submit</CoolButton>
            <br></br>
            <br></br>
            <br></br>
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>

    )
};
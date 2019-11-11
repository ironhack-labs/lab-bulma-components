import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import FormField from './Components/FormField';
import CoolButton from './Components/CoolButton';
import Signup from './Components/Signup';

class App extends Component {
    constructor(props) {
        super();
        this.modes = {
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
            isWhite: "is-white"
        };
    }

    render() {
        return (
            <div className='App'>
                <Navbar />
                <div className='Form'>
                    <FormField label='Name' type='text' placeholder='e.g Alex Smith'/>
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
                
                <div className='Buttons'>
                    {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                    <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
                    {Object.values(this.modes).map((x, i) => <CoolButton button={x}>Button {i}</CoolButton>)}

                </div>

                <Signup />
            </div>
        )
    }
}

export default App;
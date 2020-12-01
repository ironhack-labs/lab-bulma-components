import React from 'react';
import { render } from 'react-dom';

class CoolButton extends React.Component {
    render() {
        console.log('COOL BUTTON THIS.PROPS.CHILDREN', this.props.children);

        const legend = {
            isDanger: 'is-danger',
            isRounded: 'is-rounded',
            isSmall: 'is-small',
            isSuccess: 'is-success',
        };

        let classes = 'button';

        // Get all the prop names passed to the component
        let propNames = Object.keys(this.props);

        propNames.forEach(propName => {
            if (legend[propName]) {
                classes += ' ' + legend[propName];
            }
        });
        return <button className={classes}>{this.props.children}</button>;
        /* `this.props.children` is/are the value or elements passed between
         2 component tags, example:   
            
            <CoolButton>  Sign Up </CoolButton>
         
         // this.props.children = 'Sign Up'
         
         */
    }
}

export default CoolButton;
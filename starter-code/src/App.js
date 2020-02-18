import React, { Fragment }  from 'react';
import Navigation from './Navigation';
import FormField from './FormField';
import CoolButton from './CoolButton';

const App = props => {
    return (
        <Fragment>
        <Navigation />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="is-small is-danger is-rounded">Button 1</CoolButton>
        <CoolButton className="is-small is-success">Button 2</CoolButton>
        </Fragment>
    )
}

export default App;

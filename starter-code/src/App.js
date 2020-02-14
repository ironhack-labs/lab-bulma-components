import React, { Fragment }  from 'react';
import Navigation from './Navigation';
import FormField from './FormField';

const App = props => {
    return (
        <Fragment>
        <Navigation />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </Fragment>
    )
}

export default App;

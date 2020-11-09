import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';

const App = () => {
return (
<div>
<Navbar />
<FormField label="Name" type="text" placeholder="introduce tu nombre" />
<FormField label="Email" type="email" placeholder="introduce tu email" />
<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton>
</div>
);
};

export default App;
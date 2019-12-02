import React from 'react';
import Navbar from './Navbar';
import FormField from './Formfield';
import CoolButton from './CoolButton';



class App extends React.Component {
    render() {
        return(
            <div className='App'>
                <Navbar />
                <form className ='container'>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="e.g. abc123" />
                    <CoolButton class="button is-rounded my-class is-success is-small" />
                </form>

                <Message isInfo title="Hello World">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </div>
        )
    }
}

export default App; 
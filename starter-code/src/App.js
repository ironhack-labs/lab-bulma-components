import React, {Component} from 'react'
import Navbar from '../components/navbar'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'
import Message from '../components/Message'

class App extends Component {
    render(){

        return(
            <main>
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

                <CoolButton isSmall isDanger className="is-rounded my-class" >Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>

                <FormField label='Name'type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="password" type="password" placeholder="*********" />

                <CoolButton isDark isLink isPrimary>Registrarse</CoolButton>

                <Message isInfo clase="is-info" title="Hello World">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </main>
        )
    }
}        

export default App

import React, { Component } from "react"

import Navbar from '../components/Navbar'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'

class App extends Component {

    render() {

        return (
            <main className="main">
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton/>
            </main>
        )
    }
}

export default App
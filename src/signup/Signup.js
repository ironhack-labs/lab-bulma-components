import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/Formfield'
import CoolButton from '../coolButton/CoolButton'


class Signup extends React.Component {
    render() {
        return (
            <div>
            <Navbar/>
            <form>
            <FormField label="Name" input="text" placeholder="Name"/>
            <FormField label="Email" input="text" placeholder="Email"/>
            <FormField label="Password" input="password" placeholder="Password"/>
            <CoolButton isLarge>Submit</CoolButton>
            </form>
            </div>
        )
    }
}

export default Signup; 
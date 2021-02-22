import './Signup.css'
import FormField from './../formfield/FormField'
import Navbar from './../navbar/Navbar'
import CoolButton from './../coolbutton/CoolButton'

const Signup = () => {
    return (
        <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" />
            <div className="buttons">
                <CoolButton color="is-primary" size="is-normal" shape="is-rounded" text="Submit" />
            </div>
        </>
    )
}

export default Signup
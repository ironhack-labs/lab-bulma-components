import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const SignUp = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>

            <section>
                <FormField label='Name' type='text' placeholder='Alex Smith' />
                <FormField label='Email' type='email' placeholder='alexsmith@gmail.com' />
                <FormField label='Password' type='password' placeholder='****' />
                <CoolButton className='is-dark'>Submit</CoolButton>
            </section>


        </main>
    )
}
export default SignUp
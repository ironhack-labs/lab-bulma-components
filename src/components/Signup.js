import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

const Signup = props => {
    return (
        <>
            
        <Navbar></Navbar>
        <form className='form'>
            <FormField
                    label='Name'
                    type='text'
                    placeholder='e.g Alex Smith'
            />        
            <FormField
                    label='Email'
                    type='email'
                    placeholder='e.g. alexsmith@gmail.com'
            />
            <FormField
                    label='Password'
                    type='password'
            />
            <CoolButton
                class='button is-small is-success'
                name='Submit'
                type='submit'
            />
        </form>
                
        </>
    )
}

export default Signup
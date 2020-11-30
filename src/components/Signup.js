import CoolButton from './CoolButton';
import FormField from './FormField';
import Navbar from './Navbar';

const Signup = props => {
    return (
        <>
            <form>
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="text" placeholder="alexsmith@gmail.com"/>
                <FormField label="Password" type="text" placeholder="...."/>
                <CoolButton/>
            </form>
        </>
    )
}
export default Signup
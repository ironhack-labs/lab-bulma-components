import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formField/FormField';
import CoolButton from '../coolButton/CoolButton';

const Signup = () => {
    return (
        <>
            <Navbar input1='Home' input2='Login' input3='Signup'></Navbar>
            <FormField input1='Name' type='text' placeholder='e.g Alex Smith' ></FormField>
            <FormField input1='Email' type='email' placeholder='e.g. alexsmith@gmail.com' ></FormField>
            <FormField input1='Password' type='Password' ></FormField>
            <CoolButton className="button is-rounded my-class is-success is-small is-centered" btn1="Submit"> </CoolButton>
        </>
    )
}

export default Signup
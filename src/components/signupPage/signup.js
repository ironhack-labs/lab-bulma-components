import Navbar from '../navbar/Navbar'
import Form from '../form/FormField'
import CoolButton from '../coolbtn/CoolButton'

const SignupPage = () => {
    return (
        <section>
            <Navbar fstButtonTxt="Home" />
            <form>
                <Form label="Name" type="text" placeholder="e.g Whatever Youwant" />
                <Form label="Email" type="email" placeholder="e.g what@everI.want" />
                <Form label="Password" type="password" placeholder="********" />
                
                <div className="buttons">
                    <CoolButton color="is-dark" isRounded="is-rounded" title="Signup" />
                </div>
            </form>
        </section>
    )
}

export default SignupPage
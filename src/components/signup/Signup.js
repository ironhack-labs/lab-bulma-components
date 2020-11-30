import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './button/Button'

const Signup = () => {
  return (
    <section id='signup'>
      <Navbar />

      <form>
          <FormField label="Username" type="text" placeholder="e.g Popino" />
          <FormField label="Email" type="email" placeholder="e.g popino@onipop.pop" />
          <FormField label="Password" type="password" placeholder="********" />
          <CoolButton className='button is-primary is-rounded' text='Signup'/>
      </form>

    </section>
  )
}

export default Signup
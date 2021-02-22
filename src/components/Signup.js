import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import Container from "./Container"

const Signup = () => (
  <>
    <Navbar />
    <section>
      <Container>
        <form>
          <FormField
            className="mt-2"
            label="Name"
            type="text"
            placeholder="e.g. AlexSmith"
          />
          <FormField
            className="mt-2"
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField className="mt-2" label="Password" type="password" />
          <CoolButton isPrimary className="mt-3 is-rounded">
            Submit
          </CoolButton>
        </form>
      </Container>
    </section>
  </>
)

export default Signup

import Navbar from "./navbar/Navbar"
import FormField from "./formfield/FormField"
import CoolButton from "./buttons/Buttons"
import Message from "./message/Message"
import 'bulma/css/bulma.css';

function App() {
   return (
          <main>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
            <CoolButton className="button is-rounded my-class is-small is-hovered" name="Submit"></CoolButton>
            <Message isInfo title='Hello World'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
          </main>
      )
}

export default App;

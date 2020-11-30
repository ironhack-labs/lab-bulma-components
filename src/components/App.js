import './App.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './button/Button'
import Container from './container/Container'
import Message from './message/Message'

function App() {
  let content = (
    <section>
        
      <form id='login'>
        <FormField label="Username" type="text" placeholder="e.g Popino" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton className='button is-info is-rounded' text='Login'/>
      </form>

      <Message title='Hello World' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>

    </section>
)

  return (
    <main>
      <Navbar />

      <Container content={ content }/>
      
    </main>
  );
}

export default App;

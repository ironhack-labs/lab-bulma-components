import React, {Component} from "react"
import Nav from "./components/Nav"
import CoolButton from "./components/Button"
import Signup from "./components/Signup"
import Message from "./components/Message"

class App extends Component {

  render() {
    const obj = { 
      classNames:"is-info",
      title:"Hello World!"
    } 
    return (
      <div>
        <Nav />
        <section id="primarySection">
        {/* <CoolButton names={["is-small", "is-danger", "is-rounded"]}>Button 1</CoolButton>
        <CoolButton names={["is-small", "is-success"]}>Button 2</CoolButton> */}
        <Signup />
        <Message {...obj}/>
        </section>
      </div>
    )
  }

}


export default App
import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import FormField from "./components/FormField/FormField.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        );
    }
}

export default App;
import React, {
    Component
} from "react";

import Navbar from "./components/navBar.js";
import FormField from "./components/FormField.js";
import 'bulma/css/bulma.css';

class App extends Component {
    render() {
        return ( 
            <div>
                <Navbar/>
                <FormField/>
            </div>
        );
    }
}

export default App;
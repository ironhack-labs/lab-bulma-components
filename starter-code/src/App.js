import React, {
    Component
} from "react";

import Navbar from "./components/navBar.js";
import 'bulma/css/bulma.css';

class App extends Component {
    render() {
        return ( 
            <div>

                <Navbar/>

            </div>
        );
    }
}

export default App;
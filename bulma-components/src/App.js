import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Route exact to path="/" component={Home} />
            <Route exact to path="/signup" component={Signup} />
            <Route exact to path="/login" component={Login} />
          </header>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

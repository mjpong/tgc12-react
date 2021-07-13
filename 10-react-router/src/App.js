import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import FormSubmitted from './pages/FormSubmitted';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path='/form-submitted'>
            <FormSubmitted />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
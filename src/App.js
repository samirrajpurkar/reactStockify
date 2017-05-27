import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Signup from './components/auth/Signup';

const Home = () => (<h1>Home</h1>);
const About = () => (<h1>About</h1>);
const Contact = () => (<h1>Contact</h1>);

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    <Link to={{pathname: '/about'}}>About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
        <Links />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
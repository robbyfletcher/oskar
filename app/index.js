import React from 'react';
import {render} from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Nav from './components/nav';

const nav = [
  {
    text: 'Home',
    link: '/',
    active: true,
  },
  {
    text: 'About',
    link: '/about',
    active: false,
  }
];

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Nav navItems={nav}/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'));

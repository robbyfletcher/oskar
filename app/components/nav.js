import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#b">Oskar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nt"
          aria-controls="nt"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nt">
          <ul className="navbar-nav mr-auto">
            {this.props.navItems.map((e, i) => (
              <li key={i} className={this.context.router.route.location.pathname == e.link ? 'nav-item active' : 'nav-item'}>
                <Link to={e.link} className="nav-link">{e.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

Nav.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Nav;

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class BaseLayout extends Component {
  constructor(props) {
    super(props);

  };

  render() {

    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" to="/strategy">Strategy Games</NavLink>
          <NavLink activeClassName="selected" to="/card">Card Games</NavLink>
          <NavLink activeClassName="selected" to="/kids">Kids Games</NavLink>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;

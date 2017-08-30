import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;

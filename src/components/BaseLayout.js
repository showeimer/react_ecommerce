import React, {Component} from 'react';
import Navigation from './Navigation';

class BaseLayout extends Component {
  constructor(props) {
    super(props);

  };

  render() {

    return (
      <div className="baseLayout">
        <header>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <Navigation />
        </header>

        {this.props.children}

        {/* <footer>
          <h6>TableTop Games</h6>
        </footer> */}
      </div>
    )
  }
}

export default BaseLayout;

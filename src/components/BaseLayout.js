import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

// NPM Package that fetches JSONP, Wal-Mart has NO-CORS issue
import fetchJsonp from 'fetch-jsonp';

class BaseLayout extends Component {
  constructor(props) {
    super(props);

  };

  componentDidMount() {
    fetchJsonp('http://api.walmartlabs.com/v1/search?apiKey=5q8hhdk3vxe8xu92m8c7ntrs&query=strategy%20board%20games')
    .then((response) => {return response.json()})
    .then((data) => {console.log(data.items)})
    .catch((error) => {console.log(error)})
  };

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

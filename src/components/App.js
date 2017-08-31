import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/App.css';

import Navigation from './Navigation';
import menu from '../images/menu.svg';

class App extends Component {

  render() {

    return (
      <div className="home">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>

        <div className="banner">
          <h1>TableTop</h1>
          <h1>games for geeks</h1>

            <NavLink to='/strategy' className="playButton">Let's Play</NavLink>
            {/* <Navigation /> */}

        </div>
      </div>
    );
  }
}

export default App;

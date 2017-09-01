import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/App.css';

import menu from '../images/menu.svg';



class App extends Component {

  render() {

    return (
      <div className="home">

        <div className="banner">
          <h1>TableTop</h1>
          <h1>games for geeks</h1>

          <NavLink to='/strategy' className="playButton">Let's Play</NavLink>

        </div>
      </div>
    );
  }
}

export default App;

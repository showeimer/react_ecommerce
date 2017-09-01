import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

// REACT ROUTER
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// COMPONENTS
import BaseLayout from './components/BaseLayout';
import App from './components/App';
import StrategyGames from './components/StrategyGames';
import CardGames from './components/CardGames';
import KidsGames from './components/KidsGames';
import About from './components/About';
import Contact from './components/Contact';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={App} />
        <Route path="/strategy" component={StrategyGames} />
        <Route path="/card" component={CardGames} />
        <Route path="/kids" component={KidsGames} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BaseLayout>
    </Switch>

  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();

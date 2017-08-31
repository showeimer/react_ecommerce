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

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={App} />
        <Route path="/strategy" component={StrategyGames} />
        <Route path="/card" component={CardGames} />
        <Route path="/kids" component={KidsGames} />
      </BaseLayout>
    </Switch>

  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();

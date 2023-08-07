import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './templates/Home/Home';
import { Abc } from './templates/abc';
import { Menu } from './components/Menu';
import { Page404 } from './components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/abc/:slug?/:id?" component={Abc}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="*" component={Page404}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

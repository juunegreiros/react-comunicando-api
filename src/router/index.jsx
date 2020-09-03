import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Board from '../pages/Board';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/board" component={Board} />
    </Switch>
  </BrowserRouter>
);

export default Router;

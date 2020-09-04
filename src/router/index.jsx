import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Board from '../pages/Board';
import Pagina404 from '../pages/Pagina404';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/board" component={Board} />
      <Route path="*" component={Pagina404} />
    </Switch>
  </BrowserRouter>
);

export default Router;

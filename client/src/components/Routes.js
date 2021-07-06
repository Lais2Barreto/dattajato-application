import React from 'react';
import { Router, Switch, Route } from 'react-router';

import Home from '../pages/Home/Home';
import Registro from '../pages/Registro/Registro';
import Login from '../pages/Login/Login';
import Agendar from '../pages/Agendar/Agendar'; 

import { history } from '../history';
import NotFound from './NotFound';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Home} exact path="/"/>
      <Route component={Registro} exact path="/registro" />
      <Route component={Login} exact path="/login"/>
      <Route component={Agendar} exact path="/agendar"/> 
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Routes;
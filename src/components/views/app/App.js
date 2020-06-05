import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RootView from '../root/RootView';
import LoginView from '../login/LoginView';
import { routes } from '../../../routes/routes';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.login} component={LoginView} />
      <Route exact path={routes.base} component={RootView} />
    </Switch>
  </BrowserRouter>
);

export default App;

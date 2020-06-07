import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootView from '../root/RootView';
import LoginView from '../login/LoginView';
import { routes } from '../../../routes/routes';
import store from '../../../store';
import MainTemplate from '../../templates/mainTemplate';
import NavigationRouterGuard from '../../templates/NavigationRouterGuard';

const App = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <NavigationRouterGuard path={routes.login} component={LoginView} />
          <NavigationRouterGuard path={routes.base} component={RootView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default App;

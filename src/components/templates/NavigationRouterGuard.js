import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserLogged as isUserLoggedAction } from '../../actions';
import { routes } from '../../routes/routes';

const NavigationRouterGuard = ({
  path, component, isLogged, isUserLogged,
}) => {
  useEffect(() => {
    isUserLogged();
  }, []);

  switch (path) {
    case routes.login:
      return isLogged ? <Redirect to={routes.base} />
        : <Route exact path={path} component={component} />;
    default:
      return isLogged ? <Route exact path={path} component={component} />
        : <Redirect to={routes.login} />;
  }
};

const mapStateToProps = ({ isLogged }) => ({
  isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  isUserLogged: () => dispatch(isUserLoggedAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationRouterGuard);

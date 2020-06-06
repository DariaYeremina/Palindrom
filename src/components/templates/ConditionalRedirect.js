import React from 'react';
import { Redirect } from 'react-router';

const ConditionalRedirect = ({
  condition, to, from, children,
}) => {
  if (condition) {
    return (
      <Redirect to={
      {
        pathname: to,
        state: { from },
      }
    }
      />
    );
  }
  return (
    <>
      {children}
    </>
  );
};

export default ConditionalRedirect;

import React from 'react';
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import LoginView from './LoginView';

storiesOf('Views/LoginView', module)
  .addDecorator(withFormik)
  .add('LoginView', () => <LoginView />, {
    formik: {
      initialValues: {
        username: 'Dan',
        password: '123456',
      },
    },
  });

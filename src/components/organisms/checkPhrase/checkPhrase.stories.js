import React from 'react';
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import CheckPhrase from './CheckPhrase';

storiesOf('Organisms/CheckPhrase', module)
  .addDecorator(withFormik)
  .add('CheckPhrase', () => <CheckPhrase title="Lorem ipsum dolor sit amet" />, {
    formik: {
      initialValues: {
        phrase: 'Lorem ipsum',
      },
    },
  });

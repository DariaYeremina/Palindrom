import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckResults from './CheckResults';

storiesOf('Organisms/CheckResults', module)
  .add('CheckResults', () => {
    const results = [
      {
        phrase: 'lorem ipsum',
        marker: 'true',
      },
      {
        phrase: 'lorem ipsum',
        marker: 'false',
      },
      {
        phrase: 'lorem ipsum',
        marker: 'true',
      },
    ];

    return (
      <CheckResults
        title="Lorem ipsum dolor sit amet"
        results={results}
      />
    );
  });

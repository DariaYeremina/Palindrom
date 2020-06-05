import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './ListItem';

storiesOf('Molecules/ListItem', module)
  .add('ListItem', () => (
    <ListItem
      phrase="Lorem ipsum dolor sit amet"
      marker="true"
    />
  ));

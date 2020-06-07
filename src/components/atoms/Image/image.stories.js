import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';
import check from '../../../assets/check.svg';

storiesOf('Atoms/Image', module)
  .add('Image', () => (<Image src={check} />));

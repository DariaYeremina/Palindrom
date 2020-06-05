import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module)
    .add('Paragraph', () => ( <Paragraph>Lorem ipsum dolor sit amet</Paragraph>));
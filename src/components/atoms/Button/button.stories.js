import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
    .add('Primary button', () => ( <Button>Check palindrom</Button> ));
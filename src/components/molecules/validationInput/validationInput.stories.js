import React from 'react';
import { storiesOf } from '@storybook/react';
import ValidationInput from './ValidationInput';

storiesOf('Molecules/ValidationInput', module)
    .add('ValidationInput', () => ( <ValidationInput name={'text'}
                                                                        value={'Random text'}
                                                                        placeholder={'Add text'}
                                                                        onChange={() => (() => {})}
                                                                        onblur={() => (() => {})}/>))
    .add('ValidationInput with Error', () => ( <ValidationInput name={'text'}
                                                                                 value={''}
                                                                                 placeholder={'Add text'}
                                                                                 error={'Some error'}
                                                                                 onChange={() => (() => {})}
                                                                                 onblur={() => (() => {})}/>));
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Heading from '../../atoms/Heading/Heading';
import ValidationInput from '../../molecules/validationInput/ValidationInput';
import Button from '../../atoms/Button/Button';
import Form from '../../atoms/Form/Form';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const phraseOptions = {
  name: 'phrase',
  placeholder: 'Enter phrase',
};

const CheckPhrase = ({ title }) => {
  const formik = useFormik({
    initialValues: {
      phrase: '',
    },
    validationSchema: Yup.object({
      phrase: Yup.string()
        .matches(/![0-9<>+=$\\*\\/]/, { message: 'Remove forbidden symbols: 0-9<>+=$*/' })
        .required('Field is required'),
    }),
    onSubmit: () => {
      // submit method with values
    },
  });

  return (
    <Wrapper>
      <Heading>{ title }</Heading>
      <Form onSubmit={formik.handleSubmit}>
        <ValidationInput
          name={phraseOptions.name}
          placeholder={phraseOptions.placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phrase}
          error={formik.touched.phrase && formik.errors.phrase}
        />
        <Button type="submit">Check palindrom</Button>
      </Form>
    </Wrapper>
  );
};

CheckPhrase.propTypes = {
  title: propTypes.string.isRequired,
};

export default CheckPhrase;

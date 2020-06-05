import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MainTemplate from '../../templates/mainTemplate';
import Heading from '../../atoms/Heading/Heading';
import ValidationInput from '../../molecules/validationInput/ValidationInput';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
    width: 40vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const usernameOptions = {
  name: 'username',
  placeholder: 'Enter username',
};

const passwordOptions = {
  name: 'password',
  placeholder: 'Enter password',
  type: 'password',
};

const LoginView = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/[A-ZĄĘÓŻŹŃŁąęóżźńł0-9]/, { message: 'This field can contains only letters and numbers' })
        .required('Field is required'),
      password: Yup.string()
        .required('Field is required')
        .min(6, { message: 'This field must contains at least 6 characters' }),
    }),
    onSubmit: () => {
      // submit method with values
    },
  });

  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Lorem ipsum dolor</Heading>
        <StyledForm onSubmit={formik.handleSubmit}>
          <ValidationInput
            name={usernameOptions.name}
            placeholder={usernameOptions.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <ValidationInput
            type={passwordOptions.type}
            name={passwordOptions.name}
            placeholder={passwordOptions.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Button type="submit">Login</Button>
        </StyledForm>
      </Wrapper>
    </MainTemplate>
  );
};

export default LoginView;

import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import ValidationInput from '../../molecules/validationInput/ValidationInput';
import Button from '../../atoms/Button/Button';
import Error from '../../atoms/Error/Error';
import { routes } from '../../../routes/routes';
import Form from '../../atoms/Form/Form';
import ConditionalRedirect from '../../templates/ConditionalRedirect';

const Wrapper = styled.div`
    width: 40vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const LoginView = ({
  authLoading, error, isLogged, authenticate, location,
}) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/[A-Za-zĄĘÓŻŹŃŁąęóżźńł0-9]/, { message: 'This field can contains only letters and numbers' })
        .required('Field is required'),
      password: Yup.string()
        .required('Field is required')
        .min(6, { message: 'This field must contains at least 6 characters' }),
    }),
    onSubmit: ({ username, password }) => {
      authenticate(username, password);
    },
  });
  return (
    <ConditionalRedirect condition={isLogged} to={routes.base} from={location}>
      <Wrapper>
        <Heading>Lorem ipsum dolor</Heading>
        <Form onSubmit={formik.handleSubmit}>
          <ValidationInput
            name={usernameOptions.name}
            placeholder={usernameOptions.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
          />
          <ValidationInput
            type={passwordOptions.type}
            name={passwordOptions.name}
            placeholder={passwordOptions.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
          {error && <Error>{error}</Error>}
          <Button
            disabled={authLoading}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Wrapper>
    </ConditionalRedirect>
  );
};

const mapStateToProps = ({ authLoading, error, isLogged }) => ({
  authLoading,
  error,
  isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);

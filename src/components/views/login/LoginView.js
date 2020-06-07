import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { authenticate as authenticateAction } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import ValidationInput from '../../molecules/validationInput/ValidationInput';
import Button from '../../atoms/Button/Button';
import Error from '../../atoms/Error/Error';
import Form from '../../atoms/Form/Form';

const Wrapper = styled.div`
    width: 40vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      width: 90vw;
    }
`;

const usernameOptions = {
  name: 'username',
};

const passwordOptions = {
  name: 'password',
  type: 'password',
};

const LoginView = ({
  authLoading, error, authenticate,
}) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/[A-Za-zĄĘÓŻŹŃŁąęóżźńł0-9]/, { message: t('errors.letters_and_numbers') })
        .required(t('errors.required')),
      password: Yup.string()
        .required(t('errors.required'))
        .min(6, { message: t('errors.min_6') }),
    }),
    onSubmit: ({ username, password }) => {
      authenticate(username, password);
    },
  });

  return (
    <Wrapper>
      <Heading>{t('login.title')}</Heading>
      <Form onSubmit={formik.handleSubmit}>
        <ValidationInput
          name={usernameOptions.name}
          placeholder={t('placeholders.username')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          error={formik.touched.username && formik.errors.username}
        />
        <ValidationInput
          type={passwordOptions.type}
          name={passwordOptions.name}
          placeholder={t('placeholders.password')}
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
          {t('buttons.login')}
        </Button>
      </Form>
    </Wrapper>
  );
};

const mapStateToProps = ({ authLoading, error }) => ({
  authLoading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);

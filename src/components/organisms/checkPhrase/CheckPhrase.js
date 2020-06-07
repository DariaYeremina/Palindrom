import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Heading from '../../atoms/Heading/Heading';
import ValidationInput from '../../molecules/validationInput/ValidationInput';
import Button from '../../atoms/Button/Button';
import Form from '../../atoms/Form/Form';
import { checkPalindrom } from '../../../utils/checkPalindrom';
import { addResult as addResultAction } from '../../../actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const phraseOptions = {
  name: 'phrase',
};

const CheckPhrase = ({ addResult }) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      phrase: '',
    },
    validationSchema: Yup.object({
      phrase: Yup.string()
        .required(t('errors.required')),
    }),
    onSubmit: ({ phrase }) => {
      const _item = {
        text: phrase,
        marker: checkPalindrom(phrase),
      };
      addResult(_item);
    },
  });

  return (
    <Wrapper>
      <Heading>{ t('root_view.title') }</Heading>
      <Form onSubmit={formik.handleSubmit}>
        <ValidationInput
          name={phraseOptions.name}
          placeholder={t('placeholders.phrase')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phrase}
          error={formik.touched.phrase && formik.errors.phrase}
        />
        <Button type="submit">{t('buttons.check')}</Button>
      </Form>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addResult: (item) => dispatch(addResultAction(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CheckPhrase);

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Error from '../../atoms/Error/Error';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ValidationInput = ({
  type, name, value, placeholder, onChange, onBlur, error,
}) => (
  <StyledWrapper>
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    { error && <Error>{ error }</Error> }
  </StyledWrapper>
);

ValidationInput.propTypes = {
  error: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
};

ValidationInput.defaultProps = {
  error: null,
  type: 'text',
};

export default ValidationInput;

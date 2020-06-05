import styled from 'styled-components';

const Input = styled.input`
  min-width: 100px;
  max-width: 100%;
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  
  &::placeholder {
    color: ${({ theme }) => theme.lightGrey};
  }
  
  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.blue};
  }
`;

export default Input;
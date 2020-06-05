import styled from 'styled-components';

const Error = styled.p`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Error;
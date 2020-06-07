import styled from 'styled-components';

const Subheading = styled.h2`
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Subheading;
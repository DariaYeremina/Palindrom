import styled from 'styled-components';

const Marker = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Marker;
import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export default Paragraph;
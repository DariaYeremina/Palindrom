import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/globalStyles';
import { theme } from '../../theme/theme';

const Wrapper = styled.div`
    display: fiex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Wrapper>
);

export default MainTemplate;

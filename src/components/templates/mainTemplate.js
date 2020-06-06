import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/globalStyles';
import { theme } from '../../theme/theme';

const Wrapper = styled.div`
    display: fiex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Wrapper>
);

// const mapDispatchToProps = (dispatch) => ({
//   isUserLogged: () => dispatch(isUserLoggedAction()),
// });

// export default connect(
//   null,
//   mapDispatchToProps,
// )(MainTemplate);
export default MainTemplate;

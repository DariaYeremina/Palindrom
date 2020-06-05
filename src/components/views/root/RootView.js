import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../../templates/mainTemplate';
import CheckPhrase from '../../organisms/checkPhrase/CheckPhrase';
import CheckResults from '../../organisms/checkResults/CheckResults';

const Wrapper = styled.div`
    width: 40vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
`;

const RootView = () => (
  <MainTemplate>
    <Wrapper>
      <CheckPhrase title="Lorem ipsum" />
      <CheckResults
        title="Lorem ipsum"
        results={[{}]}
      />
    </Wrapper>
  </MainTemplate>
);

export default RootView;

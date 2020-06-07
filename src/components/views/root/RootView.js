import React from 'react';
import styled from 'styled-components';
import CheckPhrase from '../../organisms/checkPhrase/CheckPhrase';
import CheckResults from '../../organisms/checkResults/CheckResults';

const Wrapper = styled.div`
    width: 40vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 90vw;
    }
`;

const RootView = () => (
  <Wrapper>
    <CheckPhrase />
    <CheckResults />
  </Wrapper>
);

export default RootView;

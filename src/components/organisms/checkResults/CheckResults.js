import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Subheading from '../../atoms/Subheading/Subheading';
import ListItem from '../../molecules/listItem/ListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const CheckResults = ({ title, results }) => (
  <Wrapper>
    <Subheading>{ title }</Subheading>
    {
            results.map((el) => (
              <ListItem
                phrase={el.phrase}
                marker={el.marker}
              />
            ))
        }
  </Wrapper>
);

CheckResults.propTypes = {
  title: propTypes.string.isRequired,
  results: propTypes.arrayOf(Object).isRequired,
};

export default CheckResults;

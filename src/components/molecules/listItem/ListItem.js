import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Marker from '../../atoms/Marker/Marker';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
`;

const ListItem = ({ phrase, marker }) => (
  <Wrapper>
    <Paragraph>{ phrase }</Paragraph>
    <Marker>{ marker }</Marker>
  </Wrapper>
);

ListItem.propTypes = {
  phrase: propTypes.string.isRequired,
  marker: propTypes.string.isRequired,
};

export default ListItem;

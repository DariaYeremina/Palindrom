import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Image from '../../atoms/Image/Image';
import check from '../../../assets/check.svg';
import reject from '../../../assets/reject.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
`;

const StyledImage = styled(Image)`
  flex-shrink: 0;
`;

const ListItem = ({ phrase, marker }) => (
  <Wrapper>
    <Paragraph>{ phrase }</Paragraph>
    <StyledImage src={marker ? check : reject} />
  </Wrapper>
);

ListItem.propTypes = {
  phrase: propTypes.string.isRequired,
  marker: propTypes.bool.isRequired,
};

export default ListItem;

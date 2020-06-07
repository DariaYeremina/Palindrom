import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Subheading from '../../atoms/Subheading/Subheading';
import ListItem from '../../molecules/listItem/ListItem';
import { getResults as getResultsAction } from '../../../actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`;

const CheckResults = ({ results, getResults }) => {
  useEffect(() => {
    getResults();
  }, []);

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Subheading>{ t('root_view.subtitle') }</Subheading>
      {
              results.map((el, index) => (
                <ListItem
                  key={index}
                  phrase={el.text}
                  marker={el.marker}
                />
              ))
          }
    </Wrapper>
  );
};

const mapStateToProps = ({ results }) => ({
  results,
});

const mapDispatchToProps = (dispatch) => ({
  getResults: () => dispatch(getResultsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckResults);

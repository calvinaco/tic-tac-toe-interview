/**
 *
 * BoardSquare
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PLAYER_O, PLAYER_X } from '../../containers/GameBoard/constants';

const Container = styled.div`
  margin: 3px;
  width: 72px;
  height: 72px;
  font-size: 62px;
  line-height: 72px;
  background-color: #26A69A;

  border-right: 5px solid #00695C;
  &:last-child {
    border-right: 0;
  }
`;

const SymbolO = styled.div`
  color: #EEEEEE;
`;
const SymbolX = styled.div`
  color: #EF5350;
`;

function BoardSquare(props) {
  const renderSymbol = () => {
    if (props.symbol === PLAYER_X) {
      return <SymbolX>X</SymbolX>
    } else if (props.symbol === PLAYER_O) {
      return <SymbolO>O</SymbolO>
    } else {
      return
    }
  }

  return (
    <Container onClick={props.onClick}>{renderSymbol()}</Container>
  );
}

BoardSquare.propTypes = {
  symbol: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(BoardSquare);

/**
 *
 * GameBoard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGameBoard from './selectors';
import reducer from './reducer';
import { placeMarkAction } from './actions';
import BoardSquare from '../../components/BoardSquare';
import GameStatus from '../../components/GameStatus';

const Container = styled.div`
  text-align: center;
`;
const Board = styled.div`
  display: inline-block;
`;
const BoardRow = styled.div`
  display: flex;
  border-bottom: 5px solid #00695C;
  &:last-child {
    border-bottom: 0;
  }
`;

export function GameBoard({
  dispatch,
  gameBoard
}) {
  useInjectReducer({ key: 'gameBoard', reducer });

  const renderBoardSquare = (position) => <BoardSquare
    symbol={gameBoard.board[position]}
    onClick={() => dispatch(placeMarkAction(position))}
  />

  return <Container>
    <Board>
      <BoardRow>
        { renderBoardSquare(0) }
        { renderBoardSquare(1) }
        { renderBoardSquare(2) }
      </BoardRow>
      <BoardRow>
        { renderBoardSquare(3) }
        { renderBoardSquare(4) }
        { renderBoardSquare(5) }
      </BoardRow>
      <BoardRow>
        { renderBoardSquare(6) }
        { renderBoardSquare(7) }
        { renderBoardSquare(8) }
      </BoardRow>
    </Board>
    <GameStatus currentPlayer={gameBoard.currentPlayer} winner={gameBoard.winner} />
  </Container>;
}

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gameBoard: makeSelectGameBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameBoard);

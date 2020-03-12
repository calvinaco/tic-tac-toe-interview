/*
 *
 * GameBoard reducer
 *
 */
import produce from 'immer';
import { PLACE_MARK_ACTION, PLAYER_O, PLAYER_X } from './constants';

export const initialState = {
  currentPlayer: PLAYER_O,
  board: Array(9).fill(''),
  winner: null,
};

/* eslint-disable default-case, no-param-reassign */
const gameBoardReducer = (state = initialState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case PLACE_MARK_ACTION:
        draftState.currentPlayer = PLAYER_X;
        draftState.board[action.position] = state.currentPlayer;
        break;
    }
  });

export default gameBoardReducer;

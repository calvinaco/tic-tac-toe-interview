import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gameBoard state domain
 */

const selectGameBoardDomain = state => state.gameBoard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GameBoard
 */

const makeSelectGameBoard = () =>
  createSelector(
    selectGameBoardDomain,
    substate => substate,
  );

export default makeSelectGameBoard;
export { selectGameBoardDomain };

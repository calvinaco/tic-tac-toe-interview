import produce from 'immer';
import gameBoardReducer from '../reducer';
import { PLAYER_O, PLAYER_X } from '../constants';
import { placeMarkAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('gameBoardReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      currentPlayer: PLAYER_O,
      board: Array(9).fill(''),
      winner: null,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(gameBoardReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
  it('should handle placeMarkAction action correctly', () => {
    const position = 5;
    const expectedResult = produce(state, draft => {
      draft.currentPlayer = PLAYER_X;
      draft.board = ['', '', '', '', '', PLAYER_O, '', '', ''];
      draft.winner = null;
    });
   
    expect(gameBoardReducer(state, placeMarkAction(position))).toEqual(expectedResult);
  })
});

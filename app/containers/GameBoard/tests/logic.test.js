import { rotatePlayer, findWinner } from '../logic';
import { PLAYER_X, PLAYER_O } from '../constants';

describe('GameBoard logics', () => {
  describe('rotatePlayer', () => {
    it('should rotate player to opposite', () => {
      expect(rotatePlayer(PLAYER_X)).toEqual(PLAYER_O);
      expect(rotatePlayer(PLAYER_O)).toEqual(PLAYER_X);
    });
  });

  describe('winner', () => {
    it('should return null when no one wins', () => {
      expect(findWinner(Array(9).fill(''))).toBeNull();
      expect(findWinner([PLAYER_X, '', '', PLAYER_X, '', '', PLAYER_X, '', ''])).toEqual(PLAYER_X);
      expect(findWinner(['', PLAYER_O, '', '', PLAYER_O, '', '', PLAYER_O, ''])).toEqual(PLAYER_O);
    })
  });
});

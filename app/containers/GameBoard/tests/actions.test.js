import { placeMarkAction } from '../actions';
import { PLACE_MARK_ACTION } from '../constants';

describe('GameBoard actions', () => {
  describe('Place Mark Action', () => {
    it('has a type of PLACE_MARK_ACTION', () => {
      const position = 0;
      const expected = {
        type: PLACE_MARK_ACTION,
        position,
      };
      expect(placeMarkAction(position)).toEqual(expected);
    });
  });
});

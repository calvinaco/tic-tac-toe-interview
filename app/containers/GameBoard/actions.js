/*
 *
 * GameBoard actions
 *
 */

import { PLACE_MARK_ACTION } from './constants';

export function placeMarkAction(position) {
  return {
    type: PLACE_MARK_ACTION,
    position,
  }
}

/**
 *
 * GameStatus
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PLAYER_O } from '../../containers/GameBoard/constants';

const Container = styled.div`
  margin-top: 20px;
  color: #37474F;
  font-size: 32px;
  line-height: 48px;
`;
const WinnerBanner = styled.div``;
const CurrentPlayerBanner = styled.div``;
const PlayerOText = styled.span`
  color: #EEEEEE;
`;
const PlayerXText = styled.span`
  color: #EF5350;
`;

function GameStatus(props) {
  const renderPlayerText = (player) => {
    if (player === PLAYER_O) {
      return <PlayerOText>O</PlayerOText>
    } else {
      return <PlayerXText>X</PlayerXText>
    }
  }

  return <Container>
    {
      props.winner?
        <WinnerBanner>{renderPlayerText(props.player)} Wins!</WinnerBanner>
      :
        <CurrentPlayerBanner>Player {renderPlayerText(props.currentPlayer)} turn</CurrentPlayerBanner>
    }
  </Container>
}

GameStatus.propTypes = {
  currentPlayer: PropTypes.string,
  winner: PropTypes.string,
};

export default memo(GameStatus);

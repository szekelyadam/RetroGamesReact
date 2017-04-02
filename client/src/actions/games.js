import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
} from '../constants/games';

function getGames() {
  return {
    type: GET_GAMES,
  };
}

function getGamesSuccess(games) {
  return {
    type: GET_GAMES_SUCCESS,
    games,
  };
}

function getGamesFailure() {
  return {
    type: GET_GAMES_FAILURE,
  };
}

export {
  getGames,
  getGamesSuccess,
  getGamesFailure,
};

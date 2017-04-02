import Immutable from 'immutable';

import {
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
} from '../constants/games';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES_SUCCESS:
      return state.merge({ list: action.games });

    case GET_GAMES_FAILURE:
      return state.clear();

    default:
      return state;
  }
};

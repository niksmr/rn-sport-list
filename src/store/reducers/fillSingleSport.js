// @flow

import type { State, Reducer, SportInfoServerResponse } from '../types';

const fillSingleSportReducer: Reducer<SportInfoServerResponse> = (
  state: State,
  incomingSport: SportInfoServerResponse,
): State => {
  let { data } = state.sport;
  if (data) {
    data = data.map(sport => ({
      id: sport.id,
      name: sport.name,
      list: sport.id === incomingSport.sportId ? {
        data: incomingSport.list,
        status: 'done',
      } : null,
    }));
  }
  return {
    ...state,
    sport: {
      ...state.sport,
      data,
    },
  };
};

export default fillSingleSportReducer;

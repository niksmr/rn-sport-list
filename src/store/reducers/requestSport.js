// @flow

import socket from '../socket';
import type {
  SingleSport, State, Reducer, SportList,
} from '../types';

const requestSportReducer: Reducer<number> = (
  state: State,
  id: number,
): State => {
  socket.emit('get-sport', { id });
  let { data }: {data: ?SportList} = state.sport;
  if (data) {
    data = data.map((sport: SingleSport) => {
      if (sport.id === id) {
        return {
          ...sport,
          list: {
            data: null,
            status: 'fetching',
          },
        };
      }
      return sport;
    });
  }
  return {
    ...state,
    sport: {
      ...state.sport,
      data,
    },
  };
};

export default requestSportReducer;

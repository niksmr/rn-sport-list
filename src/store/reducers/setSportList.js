// @flow

import type { State, Reducer, SportList } from '../types';

const setSportReducer: Reducer<SportList> = (
  state: State,
  data: SportList,
): State => ({
  sport: {
    data,
    status: 'done',
  },
});

export default setSportReducer;

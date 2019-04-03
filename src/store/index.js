// @flow

import { createStore } from 'effector';

import {
  sportListEvent,
  requestSportEvent,
  getSportInfoEvent,
  resetEvent,
} from './events';

import {
  setSportListReducer,
  requestSportReducer,
  fillSingleSportReducer,
} from './reducers';

import { defaultState } from './types';
import type { State } from './types';

const store = createStore<State>(defaultState);

store
  .on(sportListEvent, setSportListReducer)
  .on(requestSportEvent, requestSportReducer)
  .on(getSportInfoEvent, fillSingleSportReducer)
  .reset(resetEvent);

export default store;

// @flow

import { createEvent } from 'effector';

import type { SportList, SportInfoServerResponse } from './types';

export const sportListEvent = createEvent<SportList>('sport-list');
export const requestSportEvent = createEvent<number>('request-sport');
export const getSportInfoEvent = createEvent<SportInfoServerResponse>('get-sport');
export const resetEvent = createEvent<void>('reset');

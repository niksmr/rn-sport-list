// @flow

import io from 'socket.io-client';

import {
  sportListEvent,
  getSportInfoEvent,
} from './events';

import { serverUri } from '@/config/socket';

import { filterSportList } from './typeFilters';

import type { SportInfoServerResponse } from './types';

const socket = io(serverUri);

socket.on('sport-list', (data: ?mixed) => { sportListEvent(filterSportList(data)); });
socket.on('get-sport', (data: ?mixed) => {
  // getSportEvent(filterSport(data));
  if (
    data
    && typeof data.meta === 'object'
    && data.meta
    && typeof data.meta.id === 'number'
    && Array.isArray(data.response)
  ) {
    const { id } = data.meta;
    const list: string[] = data.response
      .map(_ => (typeof _ === 'string' && _ ? _ : null))
      .filter(Boolean);
    const resp: SportInfoServerResponse = {
      sportId: id,
      list,
    };
    getSportInfoEvent(resp);
  }
});

export default socket;

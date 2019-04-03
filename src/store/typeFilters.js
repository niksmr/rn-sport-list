// @flow
/* eslint-disable import/prefer-default-export */

import type { SportList } from './types';

const filterSportList = (data: ?mixed): SportList => {
  let result: SportList = [];
  if (Array.isArray(data)) {
    result = data.map((sport) => {
      if (!sport || typeof sport !== 'object') return null;
      const { name, id } = sport;
      if (typeof id !== 'number' || !Number.isInteger(id) || typeof name !== 'string') {
        return null;
      }
      return { id, name, list: null };
    }).filter(Boolean);
  }
  return result;
};


export { filterSportList };

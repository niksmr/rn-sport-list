// @flow

export type AsyncResourceStatus = 'initial' | 'fetching' | 'done' | 'error';

export type Async<T> = {
  data: ?T,
  status: AsyncResourceStatus,
};

export type SportInfoList = string[];

export type SingleSport = {|
  id: number,
  name: string,
  list: ?Async<SportInfoList>,
|};

export type SportList = SingleSport[];

export type SportInfoServerResponse = {|
  sportId: number,
  list: SportInfoList,
|};


export type State = {|
  sport: Async<SportList>,
|};

/* eslint-disable import/prefer-default-export */
export const defaultState: State = {
  sport: {
    data: null,
    status: 'initial',
  },
};
/* eslint-enable import/prefer-default-export */

export type Reducer<T> = (s: State, payload: T) => State;

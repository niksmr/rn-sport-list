// @flow

import type { ApplicationTheme } from '../types';

import colors from './colors';

const {
  black,
  white,
  gray,
  cardGray,
} = colors;

const theme: ApplicationTheme = {
  isLight: true,
  background: gray,
  text: black,
  touchable: {
    background: white,
    text: black,
  },
  listCard: {
    background: cardGray,
    text: black,
  },
};

export default theme;

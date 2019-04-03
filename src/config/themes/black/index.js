// @flow

import type { ApplicationTheme } from '../types';

import colors from './colors';

const {
  black,
  white,
  whiteOpacity,
  grayLight,
  grayDark,
} = colors;

const theme: ApplicationTheme = {
  isLight: false,
  background: black,
  text: white,
  touchable: {
    background: grayDark,
    text: white,
  },
  listCard: {
    background: grayLight,
    text: whiteOpacity,
  },
};

export default theme;

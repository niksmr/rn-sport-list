// @flow

export type Color = string;

export type ColorMap = {
  [key: string]: Color,
};

export type ApplicationTheme = {|
  isLight: boolean,
  background: Color,
  text: Color,
  touchable: {
    background: Color,
    text: Color,
  },
  listCard: {
    background: Color,
    text: Color,
  },
|};

// @flow

import { StyleSheet } from 'react-native';

import { gutter } from '@/config/layout';
import theme from '@/config/theme';

const singleWrapper = {
  backgroundColor: theme.touchable.background,
  marginBottom: gutter,
  borderRadius: gutter / 2,
};

const singleContainer = {
  flexDirection: 'row',
  padding: gutter,
  backgroundColor: theme.touchable.background,
  borderRadius: gutter / 2,
  justifyContent: 'space-between',
  zIndex: 10,
};

const singleText = {
  color: theme.text,
  fontSize: 20,
};

const rootContainer = {
  paddingHorizontal: gutter,
};

const singleInfoContainer = {
  backgroundColor: theme.listCard.background,
  borderBottomLeftRadius: gutter / 2,
  borderBottomRightRadius: gutter / 2,
  padding: gutter,
};

const singleInfoText = {
  color: theme.listCard.text,
};

const styles = StyleSheet.create({
  singleWrapper,
  singleContainer,
  singleText,
  rootContainer,
  singleInfoContainer,
  singleInfoText,
});

export default styles;

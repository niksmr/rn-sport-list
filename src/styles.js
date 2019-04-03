// @flow

import theme from '@/config/theme';
import { gutter } from '@/config/layout';

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  header: {
    padding: gutter,
    color: theme.text,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default styles;

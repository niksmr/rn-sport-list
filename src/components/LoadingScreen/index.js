// @flow

import React from 'react';
import {
  Text, ActivityIndicator, View, StyleSheet,
} from 'react-native';

import { gutter } from '@/config/layout';
import theme from '@/config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text,
    marginBottom: gutter,
  },
});

export default ({ text }: { text: string } = { text: '' }) => (
  <View style={styles.container}>
    {text && <Text style={styles.text}>{ text }</Text>}
    <ActivityIndicator />
  </View>
);

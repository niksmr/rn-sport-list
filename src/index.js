// @flow

import React from 'react';
import {
  StatusBar, SafeAreaView, YellowBox, Text,
} from 'react-native';

import theme from './config/theme';

import SportList from './components/SportList';

import styles from './styles';

const barStyle = !theme.isLight ? 'light-content' : 'dark-content';

/* eslint-disable no-console */
// $FlowFixMe
console.ignoredYellowBox = ['Remote debugger'];
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);
/* eslint-enable no-console */

export default () => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      barStyle={barStyle}
    />
    <Text style={styles.header}>Sport list app</Text>
    <SportList />
  </SafeAreaView>
);

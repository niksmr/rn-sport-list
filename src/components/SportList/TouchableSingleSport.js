// @flow

import React from 'react';
import {
  View, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';

import styles from './styles';

const TouchableSingleSport = (
  {
    name, progress, list, ...props
  }: {
    name: string, progress ?: boolean, list ?: ?string[],
  },
) => (
  <View style={styles.singleWrapper}>
    <TouchableOpacity style={styles.singleContainer} {...props}>
      <Text style={styles.singleText}>{ name }</Text>
      {progress && <ActivityIndicator />}
    </TouchableOpacity>
    {
      list && (
      <View style={styles.singleInfoContainer}>
        {list.map(text => <Text style={styles.singleInfoText} key={text}>{ `- ${text}` }</Text>)}
      </View>
      )
    }
  </View>
);

TouchableSingleSport.defaultProps = {
  progress: false,
  list: null,
};

export default TouchableSingleSport;

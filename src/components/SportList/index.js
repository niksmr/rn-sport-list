// @flow

import React from 'react';
import {
  ScrollView,
} from 'react-native';

import { createComponent } from 'effector-react';

import store from '@/store';
import { requestSportEvent } from '@/store/events';
import type { SportList, State } from '@/store/types';

import LoadingScreen from '@/components/LoadingScreen';

import TouchableSingleSport from './TouchableSingleSport';

import styles from './styles';
import { gutter } from '@/config/layout';

const findOpenedSportId = (list: SportList): ?number => {
  const item = list.find(sport => sport.list && sport.list.data && sport.list.data.length > 0);
  if (!item) return null;
  return item.id;
};

class SportListView extends React.PureComponent<{
  list: SportList,
  handlePress?: (id: number) => ?mixed,
}> {
  static defaultProps = {
    handlePress: () => null,
  };

  scrollViewRef = null;

  // scroll to upcoming item
  componentWillReceiveProps(nextProps) {
    if (!this.scrollViewRef) return;
    const { scrollTo } = this.scrollViewRef;
    if (typeof scrollTo !== 'function') return;

    const oldOpenedSportId = findOpenedSportId(this.props.list);
    if (!oldOpenedSportId) return;
    const newOpenedSportId = findOpenedSportId(nextProps.list);
    if (newOpenedSportId === oldOpenedSportId) return;
    if (this.scrollViewRef) {
      const index = nextProps.list.findIndex(({ id }) => id === newOpenedSportId);
      const y = (24 + gutter * 2 + gutter) * index; // line + 2 paddings + bottomMargin
      scrollTo({ y, animated: true });
    }
  }

  render() {
    const { list: sportList, handlePress } = this.props;
    return (
      <ScrollView ref={(_) => { this.scrollViewRef = _; }} style={styles.rootContainer}>
        {sportList.map(({ id, name, list }) => (
          <TouchableSingleSport
            key={id}
            onPress={() => handlePress && handlePress(id)}
            name={name}
            progress={!!list && list.status === 'fetching'}
            list={list ? list.data : null}
          />
        ))}
      </ScrollView>
    );
  }
}

const SportListConnected = createComponent<{}, State>(
  store,
  (props, state: State) => {
    const { sport } = state;
    if (sport.status !== 'done' || !sport.data) {
      return <LoadingScreen text="Sport list loading..." />;
    }
    return (
      <SportListView
        list={sport.data}
        handlePress={requestSportEvent}
      />
    );
  },
);

export default SportListConnected;

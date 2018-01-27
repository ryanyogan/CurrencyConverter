import React from 'react';
import { any } from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

Container.propTypes = {
  children: any // eslint-disable-line
};

export default Container;

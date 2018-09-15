import React from 'react';
import { any, string } from 'prop-types';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={[styles.container, { backgroundColor }]}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: any, // eslint-disable-line
  backgroundColor: string,
};

export default Container;

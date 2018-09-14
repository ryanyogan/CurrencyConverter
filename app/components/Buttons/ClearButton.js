import React from 'react';
import { string, func } from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('./images/icon.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: string,
  onPress: func,
};

export default ClearButton;

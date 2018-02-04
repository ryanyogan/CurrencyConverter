import React from 'react';
import { func, bool } from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header = ({ onPress, onWarningPress, isConnected }) => (
  <View style={styles.container}>
    {!isConnected && (
      <TouchableOpacity style={styles.button} onPress={onWarningPress}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('./images/warning.png')}
        />
      </TouchableOpacity>
    )}
    <TouchableOpacity
      style={[styles.button, styles.buttonRight]}
      onPress={onPress}
    >
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('./images/gear.png')}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: func,
  onWarningPress: func,
  isConnected: bool,
};

export default Header;

import React from 'react';
import { func } from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
};

export default Header;

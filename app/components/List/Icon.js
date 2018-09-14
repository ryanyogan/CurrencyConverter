import React from 'react';
import { bool } from 'prop-types';
import { Image, View } from 'react-native';

import styles from './styles';

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  return (
    <View style={iconStyles}>
      {checkmark && (
        <Image
          resizeMode="contain"
          style={styles.checkIcon}
          source={require('./images/check.png')}
        />
      )}
    </View>
  );
};

Icon.propTypes = {
  checkmark: bool,
  visible: bool,
};

export default Icon;

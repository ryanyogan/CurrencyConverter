import React from 'react';
import { bool, string } from 'prop-types';
import { Image, View } from 'react-native';

import styles from './styles';

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
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
  iconBackground: string,
};

export default Icon;

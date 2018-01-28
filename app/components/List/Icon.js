import React from 'react';
import { bool, string } from 'prop-types';
import { View, Image } from 'react-native';

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
      {checkmark ? (
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require('./images/check.png')}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: bool,
  visible: bool,
  iconBackground: string,
};

export default Icon;

import React from 'react';
import { func, string, bool } from 'prop-types';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: func,
  buttonText: string,
  editable: bool,
};

export default InputWithButton;
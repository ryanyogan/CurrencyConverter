import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';
import {
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Animated,
} from 'react-native';
import color from 'color';

import styles from './styles';

class InputWithButton extends Component {
  static propTypes = {
    onPress: func,
    buttonText: string,
    editable: bool,
    textColor: string,
    value: string,
  };

  constructor(props) {
    super(props);
    this.backgroundColor = new Animated.Value(0);
  }

  componentDidUpdate() {
    if (parseFloat(this.props.value)) {
      Animated.sequence([
        Animated.timing(this.backgroundColor, {
          toValue: 1,
        }),
        Animated.timing(this.backgroundColor, {
          toValue: 0,
        }),
      ]).start();
    }
  }

  render() {
    const { onPress, buttonText, editable = true, textColor } = this.props;

    const containerStyles = [styles.container];
    if (editable === false) {
      // containerStyles.push(styles.containerDisabled);
      containerStyles.push({
        backgroundColor: this.backgroundColor.interpolate({
          inputRange: [0, 1],
          outputRange: [
            styles.$inputBackgroundBase,
            styles.$inputBackgroundAlt,
          ],
        }),
      });
    }

    const buttonTextStyles = [styles.buttonText];
    if (textColor) {
      buttonTextStyles.push({ color: textColor });
    }

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
      styles.$buttonBackgroundColorModifier,
    );

    return (
      <Animated.View style={containerStyles}>
        <TouchableHighlight
          underlayColor={underlayColor}
          style={styles.buttonContainer}
          onPress={onPress}
        >
          <Text style={buttonTextStyles}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          {...this.props}
        />
      </Animated.View>
    );
  }
}

export default InputWithButton;

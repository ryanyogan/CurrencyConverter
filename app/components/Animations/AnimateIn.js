import React, { Component } from 'react';
import { any, oneOf, number } from 'prop-types';
import { Animated, Dimensions } from 'react-native';

const WINDOW_DIMENSIONS = Dimensions.get('window');

class AnimateIn extends Component {
  static propTypes = {
    children: any, // eslint-disable-line
    type: oneOf(['fromBottom', 'fromTop', 'fadeIn']),
    delay: number,
    duration: number,
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: this.props.duration || 500,
      delay: this.props.delay || 0,
    }).start();
  }

  render() {
    const { type } = this.props;
    let styles = {};

    if (type === 'fromTop') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-WINDOW_DIMENSIONS.height, 0],
            }),
          },
        ],
      };
    } else if (type === 'fadeIn') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            scale: this.animatedValue,
          },
        ],
      };
    } else if (type === 'fromBottom') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [WINDOW_DIMENSIONS.height, 0],
            }),
          },
        ],
      };
    }

    return (
      <Animated.View style={[{ width: '100%', alignSelf: 'center' }, styles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimateIn;

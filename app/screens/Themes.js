/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { View, ScrollView, StatusBar } from 'react-native';
import ESStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';

import { changePrimaryColor } from '../actions/theme';

const styles = ESStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

const colors = ['Blue', 'Green', 'Orange', 'Purple'];

class Themes extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    dispatch: func,
  };

  handleThemePress = color => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {colors.map((color, index) => {
          const colorHex = styles[`$${color.toLowerCase() || 'blue'}`];

          return (
            <View key={index}>
              <ListItem
                text={color}
                onPress={() => this.handleThemePress(colorHex)}
                selected
                checkmark={false}
                iconBackground={colorHex}
              />
              <Separator />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default connect()(Themes);

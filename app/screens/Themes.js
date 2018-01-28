/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import ESStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = ESStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

const colors = ['Blue', 'Green', 'Orange', 'Purple'];

class Themes extends Component {
  state = {};

  handleThemePress = color => {
    console.log('theme pressed with color', color);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {colors.map((color, index) => {
          const colorHex = styles[`$${color.toLowerCase()}`];

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

export default Themes;

import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connectAlert } from '../components/Alert';
import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    alertWithType: func,
  };

  handleThemesPress = () => this.props.navigation.navigate('Themes');

  handleSitePress = () =>
    Linking.openURL('http://fixer.io').catch(() =>
      this.props.alertWithType(
        'error',
        'Error',
        'Fixer.io could not be reached.',
      ),
    );

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);

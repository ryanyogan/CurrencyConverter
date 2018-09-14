import React, { Component } from 'react';
import { object } from 'prop-types';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import ESStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = ESStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
  };

  handleThemePress = color => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />

          <ListItem
            text="Blue"
            onPress={() => this.handleThemePress(styles.$blue)}
            selected
            checkmark={false}
            iconBackground={styles.$blue}
          />
          <Separator />
          <ListItem
            text="Orange"
            onPress={() => this.handleThemePress(styles.$orange)}
            selected
            checkmark={false}
            iconBackground={styles.$orange}
          />
          <Separator />
          <ListItem
            text="Green"
            onPress={() => this.handleThemePress(styles.$green)}
            selected
            checkmark={false}
            iconBackground={styles.$green}
          />
          <Separator />
          <ListItem
            text="Purple"
            onPress={() => this.handleThemePress(styles.$purple)}
            selected
            checkmark={false}
            iconBackground={styles.$purple}
          />
          <Separator />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Themes;

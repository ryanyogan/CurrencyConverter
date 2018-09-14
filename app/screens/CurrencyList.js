import React, { Component } from 'react';
import { object } from 'prop-types';
import { FlatList, StatusBar, SafeAreaView } from 'react-native';

import { ListItem, Separator } from '../components/List';

import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
  };

  handlePress = () => this.props.navigation.goBack(null);

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              onPress={this.handlePress}
              selected={item === TEMP_CURRENT_CURRENCY}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    );
  }
}

export default CurrencyList;

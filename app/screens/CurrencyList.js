import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { FlatList, StatusBar, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';

import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    dispatch: func,
  };

  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              onPress={() => this.handlePress(item)}
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

export default connect()(CurrencyList);

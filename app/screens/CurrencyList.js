import React, { Component } from 'react';
import { object, func, string } from 'prop-types';
import { FlatList, StatusBar, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';

import currencyList from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    dispatch: func,
    baseCurrency: string,
    quoteCurrency: string,
    primaryColor: string,
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
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={false} />
        <FlatList
          data={currencyList}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              onPress={() => this.handlePress(item)}
              selected={item === comparisonCurrency}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    );
  }
}

export default connect(({ currencies, theme }) => ({
  quoteCurrency: currencies.quoteCurrency,
  baseCurrency: currencies.baseCurrency,
  primaryColor: theme.primaryColor,
}))(CurrencyList);

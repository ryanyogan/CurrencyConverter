import React, { Component } from 'react';
import { object, func, string } from 'prop-types';
import { View, FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencyList from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

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
    switch (type) {
      case 'BASE':
        this.props.dispatch(changeBaseCurrency(currency));
        break;
      case 'QUOTE':
        this.props.dispatch(changeQuoteCurrency(currency));
        break;
      default:
        throw new Error('Error providing currency to Currency List Selection');
    }

    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'QUOTE') {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencyList}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
        />
      </View>
    );
  }
}

export default connect(({ currencies, theme }) => ({
  ...currencies,
  ...theme,
}))(CurrencyList);

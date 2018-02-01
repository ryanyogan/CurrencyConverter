import React, { Component } from 'react';
import { bool, object, func, string, number } from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion,
} from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    dispatch: func,
    baseCurrency: string,
    quoteCurrency: string,
    conversionRate: number,
    isFetching: bool,
    lastConvertedDate: object, // eslint-disable-line
    primaryColor: string,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  handlePressBaseCurrency = () =>
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'BASE',
    });

  handlePressQuoteCurrency = () =>
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'QUOTE',
    });

  handleTextChange = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => this.props.navigation.navigate('Options');

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={this.props.quoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect(({ currencies, theme }) => {
  const conversionSelector =
    currencies.conversions[currencies.baseCurrency] || 0;
  const rates = conversionSelector.rates || {};

  return {
    ...currencies,
    ...theme,
    conversionRate: rates[currencies.quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
  };
})(Home);

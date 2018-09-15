import React, { Component } from 'react';
import { bool, object, func, number, string } from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { connectAlert } from '../components/Alert';

import { Container } from '../components/container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import {
  getInitialConverstion,
  swapCurrency,
  changeCurrencyAmount,
} from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    dispatch: func,
    baseCurrency: string,
    quoteCurrency: string,
    amount: number,
    conversionRate: number,
    isFetching: bool,
    lastConvertedDate: object, // eslint-disable-line
    primaryColor: string,
    alertWithType: func,
    currencyError: string,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConverstion());
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  handlePressBaseCurrency = () =>
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });

  handlePressQuoteCurrency = () =>
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });

  handleTextChange = amount =>
    this.props.dispatch(changeCurrencyAmount(amount));

  handleSwapCurrency = () => this.props.dispatch(swapCurrency());

  handleOptionsPress = () =>
    this.props.navigation.navigate('Options', {
      title: 'Options',
    });

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
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            onChangeText={this.handleTextChange}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
            date={this.props.lastConvertedDate}
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

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.data
      ? new Date(conversionSelector.date)
      : new Date(),
    primaryColor: state.theme.primaryColor,
    currencyError: state.currencies.error,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));

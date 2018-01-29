import React, { Component } from 'react';
import { object, func, string } from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.794;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
    dispatch: func,
    baseCurrency: string,
    quoteCurrency: string,
  };

  handlePressBaseCurrency = () =>
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });

  handlePressQuoteCurrency = () =>
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });

  handleTextChange = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => this.props.navigation.navigate('Options');

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={this.props.quoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
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

export default connect(({ currencies }) => ({
  ...currencies,
}))(Home);

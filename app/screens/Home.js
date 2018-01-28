import React, { Component } from 'react';
import { object } from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.794;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: object, // eslint-disable-line
  };

  handlePressBaseCurrency = () =>
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });

  handlePressQuoteCurrency = () =>
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });

  handleTextChange = text => {
    console.log('change text', text);
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };

  handleOptionsPress = () => {};

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
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

export default Home;

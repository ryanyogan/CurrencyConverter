import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  state = {};

  handlePressBaseCurrency = () => console.log('Base');
  handlePressQuoteCurrency = () => console.log('Quote');
  handleTextChange = value => console.log(value);

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />

        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          onChangeText={this.handleTextChange}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <View />
      </Container>
    );
  }
}

export default Home;

import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/container';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <View />
  </Container>
);

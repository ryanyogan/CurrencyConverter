import React from 'react';
import ESStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

ESStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#F0F0F0',
  $darkText: '#343434',
});

export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);

import React from 'react';
import ESStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

ESStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
});

export default () => <Home />;

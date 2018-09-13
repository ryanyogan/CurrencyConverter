import React from 'react';
import ESStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

ESStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default () => <Home />;

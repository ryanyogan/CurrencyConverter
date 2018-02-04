import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import ESStyleSheet from 'react-native-extended-stylesheet';
import { addNavigationHelpers } from 'react-navigation';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import { PersistGate } from 'redux-persist/es/integration/react';

import configStore from './config/store';
import { ApolloProvider, client } from './config/apollo';

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

const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const AppWithNavigation = connect(({ nav }) => ({
  nav,
}))(App);

export default class Root extends Component {
  constructor(props) {
    super(props);

    const { store, persistor } = configStore();

    this.state = {
      store,
      persistor,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={this.state.persistor}>
          <ApolloProvider client={client}>
            <AlertProvider>
              <AppWithNavigation />
            </AlertProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}

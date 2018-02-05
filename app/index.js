import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

import configStore from './config/store';
import { ApolloProvider, client } from './config/apollo';
import buildStyles from './config/styles';

buildStyles();

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

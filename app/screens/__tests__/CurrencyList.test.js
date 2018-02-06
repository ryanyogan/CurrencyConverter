import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CurrencyList from '../CurrencyList';

const mockStore = configureStore([]);

it('renders properly', () => {
  const initialState = {
    currencies: {
      baseCurrency: 'USD',
      quoteCurrency: 'GBP',
    },
    theme: {
      primaryColor: 'red',
    },
  };
  const store = mockStore(initialState);
  const navigation = {
    state: {
      params: {
        type: 'QUOTE',
      },
    },
  };

  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: { store },
  });
  expect(rendered.dive()).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Home from '../Home';

const mockStore = configureStore([]);

it('renders properly', () => {
  const initialState = {
    currencies: {
      baseCurrency: 'USD',
      quoteCurrency: 'GBP',
      conversions: {
        USD: {},
      },
    },
    theme: {
      primaryColor: 'red',
    },
    network: {
      connected: true,
    },
  };
  const store = mockStore(initialState);

  const rendered = shallow(<Home />, {
    context: { store },
  });
  expect(rendered.dive()).toBeTruthy();
  expect(rendered.dive()).toMatchSnapshot();
});

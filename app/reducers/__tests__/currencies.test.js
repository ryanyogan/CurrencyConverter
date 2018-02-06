import reducer from '../currencies';
import {
  getInitialConversion,
  changeCurrencyAmount,
  swapCurrency,
  changeBaseCurrency,
  changeQuoteCurrency,
} from '../../actions/currencies';

it('sets initial state', () => {
  const expected = {
    baseCurrency: 'USD',
    quoteCurrency: 'CAD',
    amount: 100,
    conversions: {},
    error: null,
  };
  const result = reducer(undefined, {});
  expect(result).toEqual(expected);
});

it('snapshots the initialState', () => {
  expect(reducer(undefined, {})).toMatchSnapshot();
});

it('sets nested data on initialState', () => {
  const expected = {
    baseCurrency: 'USD',
    quoteCurrency: 'CAD',
    amount: 100,
    conversions: {
      USD: {
        isFetching: true,
        date: '',
        rates: {},
      },
    },
    error: null,
  };
  const response = reducer(undefined, getInitialConversion());
  expect(response).toEqual(expected);
});

it('snapshots nested data on initialState', () => {
  expect(reducer(undefined, getInitialConversion())).toMatchSnapshot();
});

it('defaults change currency amount to 0', () => {
  expect(reducer(undefined, changeCurrencyAmount())).toMatchSnapshot();
});

it('changes the currency amount', () => {
  expect(reducer(undefined, changeCurrencyAmount(1000))).toMatchSnapshot();
});

it('swaps base and quote currencies', () => {
  expect(reducer(undefined, swapCurrency())).toMatchSnapshot();
});

it('changes the base currency', () => {
  expect(reducer(undefined, changeBaseCurrency('CZK'))).toMatchSnapshot();
});

it('changes the quote currency', () => {
  expect(reducer(undefined, changeQuoteCurrency('GBP'))).toMatchSnapshot();
});

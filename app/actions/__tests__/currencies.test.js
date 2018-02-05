import {
  getInitialConversion,
  changeCurrencyAmount,
  changeBaseCurrency,
  changeQuoteCurrency,
  swapCurrency,
  GET_INITIAL_CONVERSION,
  CHANGE_CURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  SWAP_CURRENCY,
} from '../currencies';

it('creates a GET_INITIAL_CONVERSION action', () => {
  const expected = {
    type: GET_INITIAL_CONVERSION,
  };
  const response = getInitialConversion();
  expect(response).toEqual(expected);
});

it('creates a SWAP_CURRENCY action', () => {
  const expected = {
    type: SWAP_CURRENCY,
  };
  const response = swapCurrency();
  expect(response).toEqual(expected);
});

it('creates a CHANGE_CURRENCY_AMOUNT action', () => {
  const expected = {
    type: CHANGE_CURRENCY_AMOUNT,
    amount: 1000,
  };
  const response = changeCurrencyAmount(1000);
  expect(response).toEqual(expected);
});

it('creates a CHANGE_BASE_CURRENCY action', () => {
  const expected = {
    type: CHANGE_BASE_CURRENCY,
    currency: 'USD',
  };
  const response = changeBaseCurrency('USD');
  expect(response).toEqual(expected);
});

it('creates a CHANGE_QUOTE_CURRENCY action', () => {
  const expected = {
    type: CHANGE_QUOTE_CURRENCY,
    currency: 'GBP',
  };
  const response = changeQuoteCurrency('GBP');
  expect(response).toEqual(expected);
});

it('snapshots GET_INITIAL_CONVERSION action', () => {
  expect(getInitialConversion()).toMatchSnapshot();
});

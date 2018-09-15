import { takeEvery } from 'redux-saga/effects';
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
} from '../actions/currencies';

const fetchLatestConversionRates = function*(action) {
  console.log('TODO: Update the data', action);
  yield;
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;

import React from 'react';
import { string, object, number } from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, quote, conversionRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: object, // eslint-disable-line
  base: string,
  quote: string,
  conversionRate: number,
};

export default LastConverted;

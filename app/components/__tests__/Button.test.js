import React from 'react';
import renderer from 'react-test-renderer';

import buildStyles from '../../config/styles';
import { ClearButton, styles } from '../Buttons';

beforeAll(() => {
  buildStyles();
});

it('renders successfully', () => {
  const rendered = renderer.create(<ClearButton />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles should be an object', () => {
  expect(typeof styles).toBe('object');
});

it('renders custom text passed via props', () => {
  const rendered = renderer.create(<ClearButton text="test" />).toJSON();
  expect(rendered).toMatchSnapshot();
});

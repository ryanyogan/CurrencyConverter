import React from 'react';
import renderer from 'react-test-renderer';

import { Container, styles } from '../Container';

it('renders the Container component', () => {
  const rendered = renderer.create(<Container />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
  expect(typeof styles).toBe('object');
});

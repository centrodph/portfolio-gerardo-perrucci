import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test site/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

import data from './data.json';

test('renders App with Films List', () => {
  const { getByText } = render(<App {...data} />);

  const filmsTitle = getByText(/Films List/i);
  expect(filmsTitle).toBeInTheDocument();
});

test('renders TV Seasons when click on Button', () => {
  const { getByText } = render(<App {...data} />);

  const tvSeasonsButton = getByText(/TV Seasons/i);
  expect(tvSeasonsButton).toBeInTheDocument();

  fireEvent.click(tvSeasonsButton);

  const tvSeasonsTitle = getByText(/TV Seasons List/i);
  expect(tvSeasonsTitle).toBeInTheDocument();  
});

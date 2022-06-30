import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import AppHeader from './AppHeader';
import { RECIPES_LIST_PAGE } from '../../pages/Paths';

describe('testing the AppHeader component', () => {
  afterEach(cleanup);

  const history = createMemoryHistory();

  it('renders correctly', () => {
    render(<AppHeader />, { wrapper: Router });
    const appHeader = screen.getByRole('banner');
    expect(appHeader).toBeTruthy();
  });

  it('search is shown on homepage', () => {
    render(
      <Router location={RECIPES_LIST_PAGE} navigator={history}>
        <AppHeader />
      </Router>
    );

    const searchInput = screen.getByRole('textbox', { name: /search/i });
    expect(searchInput).toBeTruthy();
  });

  it('search renders', () => {
    render(<AppHeader />, { wrapper: Router });
    const searchField = screen.getByTestId('searchField');
    expect(searchField).toBeInTheDocument();
  });

  it('search field initialy is empty', () => {
    render(<AppHeader />, { wrapper: Router });
    const searchFieldInput = screen.getByTestId('searchField');
    expect(searchFieldInput).toHaveTextContent('');
  });
});

import React from 'react';
import { render, cleanup, screen, wrapper, waitFor } from '@testing-library/react';
import { userEvent, fireEvent } from '@testing-library/user-event';
import SearchField from './SearchField';

describe('testing the SearchField component', () => {
  afterEach(cleanup);

  it('search renders', () => {
    render(<SearchField />);
    const searchField = screen.getByTestId('searchField');
    expect(searchField).toBeInTheDocument();
  });

  it('search field initialy is empty', () => {
    render(<SearchField />);
    const searchFieldInput = screen.getByTestId('searchField');
    expect(searchFieldInput).toHaveTextContent('');
  });

  // it('can type inside search field', () => {
  //   render(<SearchField />);
  //   // const searchFieldInput = screen.getByTestId('searchField');
  //   const searchFieldInput = screen.getByRole('textbox', { name: /search/i })
  //   userEvent.type(searchFieldInput, 'lemon')
  //   expect(searchFieldInput.value).toBe('lemon');
  // });
});

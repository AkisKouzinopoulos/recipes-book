import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import ErrorAlert from './ErrorAlert';

describe('testing the ErrorAlert component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    render(<ErrorAlert message="" />);
    const errorAlert = screen.queryByTestId('errorAlert');
    expect(errorAlert).toBeTruthy();
  });

  it('ErrorAlert component is rendered with the correct error message', () => {
    const message = 'Something went wrong, please try again later';
    render(<ErrorAlert message={message} />);
    const errorAlert = screen.queryByText(message);
    expect(errorAlert).toBeTruthy();
  });
});

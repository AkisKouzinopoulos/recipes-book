import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteLogo from './SiteLogo';

describe('testing the SiteLogo component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    render(<SiteLogo />, { wrapper: Router });
    const logo = screen.getByRole('link', { name: /recipes book site logo/i });
    expect(logo).toBeTruthy();
  });
});

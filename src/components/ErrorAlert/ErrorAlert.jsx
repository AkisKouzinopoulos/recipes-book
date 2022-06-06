import React from 'react';
import Alert from '@mui/material/Alert';

const ErrorAlert = ({ message }) => (
  <Alert data-testid="errorAlert" severity="error">
    {message}
  </Alert>
);

export default ErrorAlert;

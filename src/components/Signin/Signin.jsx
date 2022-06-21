import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RECIPES_LIST_PAGE } from '../../pages/Paths';
import RecipesBookApiClient from '../../clients/RecipesBookApiClient';

function Login() {
  const navigate = useNavigate();
  const initialState = {
    email: '', // required
    password: '', // required
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async e => {
    e.preventDefault();
    await RecipesBookApiClient.login(formData);
    navigate(RECIPES_LIST_PAGE);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h2" my={3}>
        Login
      </Typography>
      <Stack direction="column" spacing={2} maxWidth="320px">
        <TextField
          required
          id="outlined-required-email"
          label="Email"
          value={formData.email}
          name="email"
          onChange={e => handleChange(e)}
        />
        <TextField
          required
          id="outlined-required-password"
          label="Password"
          value={formData.password}
          name="password"
          onChange={e => handleChange(e)}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Login
        </Button>
      </Stack>
    </Stack>
  );
}

export default Login;

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import RecipesBookApiClient from '../../clients/RecipesBookApiClient';
import { RECIPES_LIST_PAGE } from '../../pages/Paths';

const Signup = () => {
  const navigate = useNavigate();
  const initialState = {
    email: '', // required
    password: '', // required
    username: '', // optional
  };
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = async e => {
    e.preventDefault();
    await RecipesBookApiClient.signup(formData);
    navigate(RECIPES_LIST_PAGE);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h2" my={3}>
        Sign up
      </Typography>
      <Stack direction="column" spacing={2} maxWidth="320px">
        <TextField
          required
          id="outlined-required-username"
          label="Username"
          value={formData.username}
          name="username"
          onChange={e => handleChange(e)}
        />
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
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export default Signup;

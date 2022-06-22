import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RECIPES_LIST_PAGE } from '../../pages/Paths';
import RecipesBookApiClient from '../../clients/RecipesBookApiClient';
import { RecipesContext } from '../../context/Recipes/RecipesContext';

function Login() {
  const navigate = useNavigate();
  const initialState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);

  const { dispatch } = useContext(RecipesContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const loginResponse = await RecipesBookApiClient.login(formData);

    if (loginResponse.accessToken) {
      dispatch({
        type: 'USER_LOGED_IN',
        payload: true,
      });
    }

    navigate(RECIPES_LIST_PAGE);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;
  const enableSigninBtn = email?.length > 0 && password?.length > 0;

  return (
    <>
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
          type="password"
          onChange={e => handleChange(e)}
        />
        <Button variant="outlined" disabled={!enableSigninBtn} onClick={handleSubmit}>
          Login
        </Button>
      </Stack>
    </>
  );
}

export default Login;

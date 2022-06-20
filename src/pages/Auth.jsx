import React from 'react';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Signup from '../components/Signup/Signup';
import Signin from '../components/Signin/Signin';

const Auth = () => (
  <>
    <Signup />
    <Signin />
  </>
);

export default Auth;

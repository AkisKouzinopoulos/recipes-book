import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Signup from '../components/Signup/Signup';
import Signin from '../components/Signin/Signin';

const Auth = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleShow = () => {
    setShowSignup(!showSignup);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      {showSignup ? (
        <>
          <Signup />
          <Typography variant="h4" mt={4}>
            Already registered?
          </Typography>
        </>
      ) : (
        <Signin />
      )}
      {}
      <Button onClick={toggleShow} sx={{ margin: '10px auto 30px' }}>
        Go to {showSignup ? 'Sign in' : 'Sign up'}
      </Button>
    </Stack>
  );
};

export default Auth;

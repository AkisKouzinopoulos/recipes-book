import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { RECIPES_LIST_PAGE, AUTHENTICATE } from '../../pages/Paths';
import { RecipesContext } from '../../context/Recipes/RecipesContext';

const Username = styled(Stack)`
  color: #2a2a2a;
  h3 {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const WelcomeUser = ({ username }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { dispatch } = useContext(RecipesContext);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('username');
    dispatch({
      type: 'USER_LOGED_IN',
      payload: false,
    }); //  Update the state so the listItem listens to the change.
    navigate(RECIPES_LIST_PAGE);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Username
      alignItems={{
        xs: 'flex-end',
        sm: 'flex-start',
        md: 'flex-start',
      }}
      mx={{
        xs: '3px',
        md: '15px',
      }}
    >
      <Typography variant="h4">Welcome</Typography>
      <Typography aria-describedby={id} variant="h3" onClick={handleClick}>
        {username}
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack direction="column" spacing={2} p={2}>
          <Button
            my={2}
            variant="outlined"
            startIcon={<VpnKeyIcon />}
            onClick={() => navigate(AUTHENTICATE)}
          >
            Register
          </Button>
          <Button my={2} variant="outlined" startIcon={<LogoutIcon />} onClick={logout}>
            Logout
          </Button>
        </Stack>
      </Popover>
    </Username>
  );
};

export default WelcomeUser;

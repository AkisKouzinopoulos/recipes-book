import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const AppBarStyled = styled(AppBar)`
  padding: 10px 0;
  background: transparent;
  box-shadow: 0 2px 0 0 #2a2a2a, 0 -2px 0 0 #2a2a2b;

  & .MuiToolbar-root {
    padding: 0;
  }
`;

export const AddNewRecipeBtn = styled(Button)`
  border-radius: 0;
  background: transparent;
  box-shadow: 0 0 0 2px #2a2a2a inset;
  color: #fbc41b;
  font-weight: 600;

  &:hover {
    color: #fff;
    background: #fbc41b;
    box-shadow: 0 0 0 2px #2a2a2a36 inset;
  }
`;

export const LoginBtn = styled(IconButton)`
  color: #fbc41b;
  margin-right: 2px;
  box-shadow: 0 0 0 2px #2a2a2a;
  width: 40px;
`;

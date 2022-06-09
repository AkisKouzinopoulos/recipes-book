import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';


export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 0,//  theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '2px solid #2a2a2a',
  color: '#2a2a2a',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginLeft: 0,
  marginRight: 20,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const AppBarStyled = styled(AppBar)`
  padding: 10px 0;
  background: transparent;
  box-shadow: 0 2px 0px 0px #2a2a2a inset, 0 -2px 0px 0px #2a2a2a inset;

  & .MuiToolbar-root {
    padding: 0;
  }
`;

export const AddNewRecipeBtn = styled(Button)`
  border-radius: 0;
  border: 2px solid #2a2a2a;
  background: transparent;
  box-shadow: none;
  color: #FBC41B;
  font-weight: 600;
  

  &:hover {
    color: #FFF;
    background: #FBC41B;
  }
`;
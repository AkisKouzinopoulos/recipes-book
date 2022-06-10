import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const RecipeContainer = styled('div')`
  border: 2px solid #2a2a2a;
  border-radius: 0;
  padding: 15px;
`;

export const StrippedText = styled(Typography)`
  -webkit-text-stroke: 2px #2a2a2a;
  -webkit-text-fill-color: #fff;
  display: inline;
  clear: none !important;
`;

export const StrippedTextSmall = styled(StrippedText)`
  -webkit-text-stroke: 1px #2a2a2a;
`;

export const RecipeDetailsTitle = styled(StrippedText)`
  font-size: 30px;
  font-weight: 700;
`;

export const RecipeDetailsDescription = styled(Typography)`
  // background: grey;
`;

import { AppBar, Box, Typography } from '@mui/material';
import { FileCopy } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  navBarStyle,
  logoTitleStyle,
  titleTextStyle,
  navBarItemsStyle,
  itemTextStyle
} from 'styles/components/NavigationBarStyle';
import linkStyle from 'styles/GlobalStyles';
import { ROUTES } from 'constants/index';

const ResponsiveAppBar = (): JSX.Element => {
  return (
    <AppBar position="static" sx={navBarStyle}>
      <Link to={ `${ROUTES.DASHBOARD}` } style={linkStyle}>
        <Box sx={logoTitleStyle}>
          <FileCopy />
          <Typography variant="h6" sx={titleTextStyle}>
            Ninja
          </Typography>
        </Box>
      </Link>
      <Box sx={navBarItemsStyle}>
        <Link to={`${ROUTES.DASHBOARD}`} style={linkStyle}>
          <Typography sx={itemTextStyle}>
            Overview
          </Typography>
        </Link>
        <Link to={`${ROUTES.ADD_POST}`} style={linkStyle}>
          <Typography sx={itemTextStyle}>
            Add post
          </Typography>
        </Link>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;

import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/index';
import errorPageStyle from 'styles/components/NotFoundPageStyle';

const NotFoundPage = (): JSX.Element => (
  <Box sx={errorPageStyle}>
    <Typography variant='h1' component='h1' sx={ { color: 'text.info' } }>Oops!</Typography>
    <Typography variant='h4' component='h4' sx={ { color: 'text.primary' } }>404 - This page could not be found!</Typography>
    <Link to={ `${ROUTES.DASHBOARD}` } style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={ { mt: 4 } }>
          GO TO DASHBOARD
      </Button>
    </Link>
  </Box>
);

export default NotFoundPage;

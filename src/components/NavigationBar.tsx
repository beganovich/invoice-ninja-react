import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

const ResponsiveAppBar = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AdbIcon sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
            LOGO
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button
          key="overview"
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
            Overview
        </Button>
        <Button
          key="addPost"
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
            Add post
        </Button>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;

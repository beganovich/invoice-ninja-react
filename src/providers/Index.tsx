import { ReactElement } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from 'styles/Theme';
import ToastProvider from 'providers/ToastProvider';

const Providers = ({ children }: { children: ReactElement | ReactElement[] }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);

export default Providers;

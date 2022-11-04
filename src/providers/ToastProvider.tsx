import { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = ({ children }: { children: ReactElement | ReactElement[] }): JSX.Element => (
  <>
    <ToastContainer />
    {children}
  </>
);

export default ToastProvider;

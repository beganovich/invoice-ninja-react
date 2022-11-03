import { Outlet } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';

const Layout = (): JSX.Element => (
  <>
    <NavigationBar/>
    <Outlet />
  </>
);

export default Layout;

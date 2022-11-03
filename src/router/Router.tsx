import Layout from 'router/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/index';
import Dashboard from 'views/dashboard/Index';
import NotFoundPage from 'components/NotFoundPage';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

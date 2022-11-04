import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from 'router/Layout';
import Dashboard from 'views/dashboard/Index';
import NotFoundPage from 'components/NotFoundPage';
import AddPost from 'views/posts/AddPost';
import EditPost from 'views/posts/EditPost';
import { ROUTES } from 'constants/index';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.ADD} element={<AddPost />} />
        <Route path={`${ROUTES.EDIT}/:postId`} element={<EditPost />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

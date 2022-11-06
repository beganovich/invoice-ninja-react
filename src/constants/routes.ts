import { RoutesTypes } from 'types/constants/constantsTypes';

const BASE_POSTS_ROUTE: string = '/posts';

const ROUTES: RoutesTypes = {
  DASHBOARD: '/dashboard',
  BASE_POSTS: `${BASE_POSTS_ROUTE}`,
  ADD_POST: `${BASE_POSTS_ROUTE}/add`,
  EDIT_POST: `${BASE_POSTS_ROUTE}/edit`
};

export default ROUTES;

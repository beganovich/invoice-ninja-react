import Axios from 'axios';
import { UNAUTHORIZED_STATUS_CODE, ERROR_MESSAGES, API_URL } from 'constants/index';
import { toastifyAlertError } from 'helpers/toastify';

const axios = Axios.create({
  baseURL: API_URL
});

axios.interceptors.response.use((response) => response, async (error) => {
  if (UNAUTHORIZED_STATUS_CODE === error?.response?.status) {
    toastifyAlertError(ERROR_MESSAGES.AUTHORIZATION);
  }
  return await Promise.reject(error);
});

export default axios;

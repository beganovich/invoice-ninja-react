import { toast } from 'react-toastify';

const TOASTIFY_SETTINGS: object = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined
};

export const toastifyAlertSuccess = (message: string): void => {
  toast.success(message, TOASTIFY_SETTINGS);
};

export const toastifyAlertError = (message: string): void => {
  toast.error(message, TOASTIFY_SETTINGS);
};

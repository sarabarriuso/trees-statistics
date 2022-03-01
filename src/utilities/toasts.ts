import { toast, ToastOptions } from 'react-toastify';

const toastDefaultDuration = 3000;
const toastWarningErrorDuration = 5000;

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: toastDefaultDuration,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export function defaultToast(message: string): void {
  toast(message, toastOptions);
}

export function infoToast(message: string): void {
  toast.info(message, toastOptions);
}

export function successToast(message: string): void {
  toast.success(message, toastOptions);
}

export function warningToast(message: string): void {
  toast.warn(message, {
    ...toastOptions,
    autoClose: toastWarningErrorDuration,
  });
}

export function errorToast(message: string): void {
  toast.error(message, {
    ...toastOptions,
    autoClose: toastWarningErrorDuration,
  });
}

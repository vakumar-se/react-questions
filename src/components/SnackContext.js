import { createContext } from 'react';

export const SnackContext = createContext({
  toasts: [
    { message: 'Toast1', type: 'Success' },
    { message: 'Toast2', type: 'Warning' },
    { message: 'Toast3', type: 'Error' },
  ],
  addToasts: function (newToast) {
    return [...this.toasts, newToast];
  },
});

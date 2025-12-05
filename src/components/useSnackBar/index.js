import React from 'react';
import Snackbar from '../Snackbar';

export const useSnackbar = (message, delay, type) => {
  return <Snackbar message={message} delay={delay} type={type} />;
};

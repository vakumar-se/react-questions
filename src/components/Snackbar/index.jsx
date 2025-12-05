import React, { useState } from 'react';
import { styles } from './styles';

const Snackbar = ({ message, delay = 2000, type = 'success' }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <span style={styles.closebtn}> X </span>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Snackbar;

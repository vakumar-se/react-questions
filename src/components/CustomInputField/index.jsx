import React, { useState } from 'react';
import { styles } from './styles';

const CustomInputField = () => {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={
            name.length <= 10
              ? styles.error
              : name.length > 10 && name.length <= 12
                ? styles.warning
                : styles.actual
          }
          type="text"
          value={name}
          onChange={handleChange}
        />
        <span>{name.length}</span>
      </form>
    </div>
  );
};

export default CustomInputField;

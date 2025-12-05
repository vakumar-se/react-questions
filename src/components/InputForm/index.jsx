import React, { useState } from 'react';
import { useSnackbar } from '../useSnackBar';

const formFields = [
  { label: 'Name', key: 'name', type: 'text' },
  { label: 'Email', key: 'email', type: 'email' },
  { label: 'Mobile', key: 'mobile', type: 'number' },
];

const InputForm = () => {
  const [data, setData] = useState({});

  const handleChange = (e, key) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('data', data);
  };
  return (
    <form onSubmit={handleSubmit}>
      {formFields?.map(item => {
        return (
          <div key={item?.key}>
            <label>{item?.label}</label>
            <input
              type={item?.type}
              value={data[item?.key] || ''}
              onChange={e => handleChange(e, item?.key)}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;

import React, { useState, useRef } from 'react';
import './index.css';

const OtpComp = ({ length }) => {
  const [otpList, setOtpList] = useState(new Array(length).fill(''));
  const refArr = useRef([]);
  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    const newVal = value.trim();
    setOtpList(prevList => {
      const newList = [...prevList];
      newList[index] = newVal.slice(-1);
      setOtpList(newList);
    });
    newVal && refArr.current[index + 1]?.focus();
  };
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === 'Backspace') {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="otp-container">
      <p className="otp-head"> Please enter the OTP </p>
      <div className="otp-sec">
        {otpList?.map((item, index) => {
          return (
            <input
              key={index}
              type="text"
              className="otp-item"
              ref={input => (refArr.current[index] = input)}
              value={otpList[index]}
              onChange={e => handleInputChange(e.target.value, index)}
              onKeyDown={e => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpComp;

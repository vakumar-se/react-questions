import React, { useState } from 'react';
import './index.css';
import TimerComp from './TimerComp';

const ParallelTimers = () => {
  const [inputValue, setInputValue] = useState();
  const [timerList, setTimersList] = useState([]);

  const handleInputChange = val => {
    setInputValue(Number(val));
  };

  const handleStartClick = () => {
    setTimersList(prevlist => {
      return [
        ...prevlist,
        {
          id: Math.random(),
          val: Number(inputValue),
        },
      ];
    });
    setInputValue('');
  };

  const handleClose = id => {
    setTimersList(prevList => prevList.filter(item => item?.id !== id));
  };

  return (
    <div className="pt-container">
      <p className="pt-head">ParallelTimers</p>
      <p className="pt-head">Please enter the timer value</p>
      <div className="pt-input-sec">
        <input
          type="number"
          className="pt-input"
          min={10}
          max={99}
          maxLength={2}
          value={inputValue || ''}
          onChange={e => handleInputChange(e.target.value)}
        />
        <button className="pt-btn" onClick={handleStartClick}>
          Start
        </button>
      </div>
      {timerList?.map(item => {
        return (
          <TimerComp key={item?.id} startVal={item.val} id={item?.id} handleClose={handleClose} />
        );
      })}
    </div>
  );
};

export default ParallelTimers;

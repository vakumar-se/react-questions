import React, { useState } from 'react';
import './index.css';

const QuickChips = () => {
  const [inputText, setInputText] = useState('');
  const [chips, setChips] = useState([]);

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const addChip = e => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      setChips(prevChips => [...prevChips, inputText]);
      setInputText('');
    }
  };

  const handleRemoveChip = chipIndex => {
    const newArr = [...chips];
    newArr.splice(chipIndex, 1);
    setChips(newArr);
    console.log('new Arr', newArr);
  };
  return (
    <div className="container-qc">
      <h1 className="qc-head">ADD / Remove Quick Chips </h1>
      <p>Press Enter to add a Chip </p>
      <input
        className="qc-input"
        type="text"
        onChange={e => handleInputChange(e)}
        onKeyDown={e => addChip(e)}
        value={inputText}
      />
      {chips?.length > 0 && (
        <div className="qc-sec">
          {chips?.map((item, index) => {
            return (
              <div className="qc-chip" key={index}>
                <label className="qc-chip-label">{item}</label>
                <button className="qc-close-btn" onClick={() => handleRemoveChip(index)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuickChips;

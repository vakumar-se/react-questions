import React, { useEffect, useState, useRef } from 'react';

const TimerComp = ({ startVal, handleClose, id }) => {
  const [count, setCount] = useState(Number(startVal));
  let timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 0) {
          clearInterval(timer.current);
          handleClose(id);
        } else {
          return prevCount - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer.current);
  }, [handleClose, id]);

  return (
    <div style={{ margin: '10px 0' }}>
      <p>{count}</p>
    </div>
  );
};

export default TimerComp;

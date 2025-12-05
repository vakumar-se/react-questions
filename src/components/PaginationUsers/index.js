import React, { useState, useEffect } from 'react';
import { styles } from './styles';

const useFetchUsers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
        setData(res);
      })
      .catch(err => setError('error fetching data'));
  }, []);

  return { loading, data, error };
};

const PaginationUsers = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredUsers, setFilteredusers] = useState([]);

  const { loading, data, error } = useFetchUsers();

  useEffect(() => {
    if (data && data?.length > 0) {
      const dataLength = data?.length;
      const totalPages = Math.ceil(dataLength / 10);
      console.log('total pages', totalPages);
      setTotalPages(totalPages);
    }
  }, [data]);

  const handleFirstClick = () => {
    setPageNo(1);
  };

  const handlePrevClick = () => {
    let newPageNo = pageNo - 1;
    if (newPageNo <= 0) {
      newPageNo = 1;
    }
    setPageNo(newPageNo);
  };

  const handleNextClick = () => {
    let newPageNo = pageNo + 1;
    if (newPageNo > totalPages) {
      newPageNo = totalPages;
    }
    setPageNo(newPageNo);
  };

  const handleLastClick = () => {
    setPageNo(totalPages);
  };

  useEffect(() => {
    const firstIndex = (pageNo - 1) * 10;
    const LastIndex = firstIndex + 10;
    console.log('firstindex', firstIndex);
    console.log('last index', LastIndex);
    const toDisplay = data?.slice(firstIndex, LastIndex);
    console.log('todisplay', toDisplay);
    setFilteredusers(toDisplay);
  }, [pageNo, data]);

  console.log('page no', pageNo);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      <h1> User Pagination APP</h1>
      <div style={styles.btnSec}>
        <button style={styles.pagebtn} onClick={handleFirstClick}>
          First
        </button>
        <button style={styles.pagebtn} onClick={handlePrevClick}>
          Previous
        </button>
        <button style={styles.pagebtn} onClick={handleNextClick}>
          Next
        </button>
        <button style={styles.pagebtn} onClick={handleLastClick}>
          Last
        </button>
      </div>
      <div style={styles.usersSec}>
        {filteredUsers?.map(item => {
          return (
            <div key={item.id} style={styles.userItem}>
              <div style={styles.userItemText}>id: {item?.id} --------- </div>
              <div style={styles.userItemText}>title: {item?.title} --------- </div>
              <div style={styles.userItemText}>URL: {item?.thumbnailUrl}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationUsers;

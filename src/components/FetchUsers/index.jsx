import React, { useState, useEffect } from 'react';

const useFetchUsers = (input, delay = 500) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setIserror] = useState('');

  useEffect(() => {
    if (input?.length <= 0) {
      return;
    }
    setIsLoading(true);
    setResults([]);
    setIserror('');
    const timer = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          console.log('data', data);
          const matched = data?.filter(item =>
            item?.name?.toLowerCase().includes(input.toLowerCase())
          );
          setResults(matched);
        })
        .catch(err => {
          setIsLoading(false);
          setIserror('error in fetching users');
          console.log('error in fetching users');
        });
    }, delay);

    return () => clearTimeout(timer);
  }, [input, delay]);
  return { isLoading, results, error };
};

const FetchUsers = () => {
  const [input, setInput] = useState('');
  const { isLoading, results, error } = useFetchUsers(input, 1000);

  const handleInputChange = e => setInput(e.target.value);

  return (
    <div>
      <form>
        <input type="text" value={input} onChange={handleInputChange} />
        {isLoading && <div>Loading...</div>}
        {error && <div> error </div>}
        {!isLoading && results?.length === 0 && <div>No matches found</div>}
        {results &&
          results.length > 0 &&
          results.map(item => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </form>
    </div>
  );
};

export default FetchUsers;

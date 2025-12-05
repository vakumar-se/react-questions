import React, { useState, useEffect } from 'react';

const useNewsFeed = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        setLoading(false);
        setNews(data);
        localStorage.setItem('news', JSON.stringify(data));
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
        setError('error fetching news feed');
      });
  }, []);

  return { loading, news, error };
};

const NewsFeed = () => {
  let localNews = null;
  try {
    const local = localStorage.getItem('news');
    localNews = local ? JSON.parse(local) : null;
  } catch (e) {
    localNews = null;
  }

  const shouldFetch = !localNews || localNews.length === 0;

  const { loading, news: fetchedNews, error } = useNewsFeed(shouldFetch);

  const news = localNews && localNews.length ? localNews : fetchedNews;

  if ((!news || news.length === 0) && loading) {
    return <div> LOADING .... </div>;
  }

  if ((!news || news.length === 0) && error) {
    return <div> {error} </div>;
  }

  return (
    <div className="container">
      {news?.map(item => {
        return (
          <div key={item?.id}>
            <div> {item?.title} </div>
            <div> {item?.body} </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsFeed;

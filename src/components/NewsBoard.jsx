import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

export const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // Added error state
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        if (searchQuery) {
          url += `&q=${searchQuery}`;
        }

        console.log('Fetching URL:', url); // For debugging

        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched Data:', data); // For debugging

        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]); // Handle the case where no articles are returned
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery]);

  if (loading) return <div className="flex items-center justify-center">Loading...</div>;
  if (error) return <div>{error}</div>;
  if (articles.length === 0) return <div>No news articles found.</div>;

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {articles.map((article) => (
        <NewsItem
          key={article.url} // Use a unique property if available
          title={article.title}
          description={article.description}
          src={article.urlToImage}
          url={article.url}
          content={article.content}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  );
};

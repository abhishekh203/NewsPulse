import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { NewsBoard } from './components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState('general'); // Default category
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  return (
    <div>
      <Navbar 
        setCategory={setCategory} // Pass category setter to Navbar
        setSearchQuery={setSearchQuery} // Pass search query setter to Navbar
      />
      <NewsBoard 
        category={category} 
        searchQuery={searchQuery} // Pass search query to NewsBoard
      />
    </div>
  );
};

export default App;

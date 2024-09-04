import React, { useState } from 'react';
import Gallery from './components/Gallery';
import { FaSearch } from "react-icons/fa";
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSearch = async () => {
    if (query) {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}&per_page=20`);
        const data = await response.json();
        setPhotos(data.results);
      } catch (error) {
        console.error('Error fetching the photos:', error);
        alert(error)
      }
    }
  };

  return (
    <div className="app">
      <h1 onClick={() => {setQuery('');setPhotos([])}}>Picture Gallery</h1>
      <div className="search-bar-container">
        <span className='search-input' >
          <input
            type="text"
            placeholder="Enter category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <span className='search-icon-container'>
            <FaSearch
              className='search-icon'
              onClick={handleSearch}
            />
          </span>
        </span>
      </div>
      <Gallery photos={photos} />
    </div>
  );
}

export default App;


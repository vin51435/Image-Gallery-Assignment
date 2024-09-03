import React, { useState } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSearch = async () => {
    if (query) {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`);
        const data = await response.json();
        setPhotos(data.results);
      } catch (error) {
        console.error('Error fetching the photos:', error);
      }
    }
  };

  return (
    <div className="app">
      <h1>Picture Gallery</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Gallery photos={photos} />
    </div>
  );
}

export default App;

import React from 'react';

function Gallery({ photos }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img src={photo.urls.small} alt={photo.alt_description} />
          <div className="photo-info">
            <p>{photo.description || 'No description'}</p>
            <p>By: {photo.user.name}</p>
            <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
              View on Unsplash
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

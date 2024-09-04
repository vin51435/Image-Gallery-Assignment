import React from 'react';
import { isMobile } from '../utils/isMobile';

function Gallery({ photos }) {
  const mobile = isMobile();
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  return (
    <>
      {mobile
        ?
        <div className="mobile-gallery">
          {photos.map((photo) => (
            <div key={photo.id} className="mobile-photo-container">
              <span className='mobile-photo-user-details'>
                <img src={photo.user.profile_image.small} alt={photo.user.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open(photo.user.links.html, '_blank');
                  }}
                />
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open(photo.user.links.html, '_blank');
                  }}
                >
                  {photo.user.name}
                </p>
              </span>
              <div className='mobile-photo'>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </div>
              <div className='mobile-photo-details-container' onClick={() => window.open(photo.links.html, '_blank')}>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
        :
        <div className="gallery">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-container">
              <div className='photo'> <img src={photo.urls.small} alt={photo.alt_description} />
                <div className='photo-hover-container' onClick={() => window.open(photo.links.html, '_blank')}>
                  <div className='photo-hover-details'>
                    <img src={photo.user.profile_image.small} alt={photo.user.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(photo.user.links.html, '_blank');
                      }}
                    />
                    <div>
                      <p
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(photo.user.links.html, '_blank');
                        }}
                      >{photo.user.name}</p>
                      <span className='tooltip'>
                        <p>{truncateText(photo.description, 20)}</p>
                        <span className="tooltiptext">{photo.description}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}
    </>
  );
}

export default Gallery;

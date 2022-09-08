import React from 'react';

const RelatedCarouselPhoto = ({ photo, index, changePhoto, bigPhotoIndex }) => {
  return (
    <div className="related-carousel-photo" onClick={() => {
      if (index > bigPhotoIndex) {
        changePhoto(index - bigPhotoIndex)
      }
      if (index < bigPhotoIndex) {
        changePhoto(-(bigPhotoIndex - index))
      }
      }}>
      <img
        src={photo.thumbnail_url}
        height="30"
        width="30" />
    </div>
  )
}
export default RelatedCarouselPhoto;
import React from 'react';
import MiniPhoto from './MiniPhoto.jsx'

const MiniGallery = ({photos, index}) => {
  return (
    <div className="mini-carousel">
      <a>-</a>
      {photos.slice(index, index + 4).map((photo) => (
      <MiniPhoto photo={photo}/>))}
      <a>+</a>
    </div>
  )
}

export default MiniGallery;
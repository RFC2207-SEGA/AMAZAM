import React from 'react';
import MiniPhoto from './MiniPhoto.jsx'

const MiniGallery = ({photos}) => {
  return (
    <div className="mini-carousel"> {photos.map((photo) => (
      <MiniPhoto photo={photo}/>))}
    </div>
  )
}

export default MiniGallery;
import React from 'react';

const MiniPhoto = ({photo}) => {
  return (
    <div className="mini-photo">
      <img
        src={photo.url}
        width="80"
        height="80" />
    </div>
  )
}

export default MiniPhoto;
import React from 'react';

const MiniPhoto = ({photo, bigPhoto, bigPhotoIndex, onClick, index}) => {
  if (photo===bigPhoto) {
    return (
      <div className="mini-photo-selected">
        <img
          src={photo.url}
          width="50"
          height="50"
          />
      </div>
    )
  } else {
  return (
    <div className="mini-photo">
      <img
        src={photo.url}
        width="50"
        height="50"
        onClick={() => {
          if (index > bigPhotoIndex) {
            onClick(index - bigPhotoIndex)
          }
          if (index < bigPhotoIndex) {
            onClick(-(bigPhotoIndex - index))
          }
          }}/>
    </div>
  )
  }
}

export default MiniPhoto;
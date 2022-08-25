import React from 'react';

const FullscreenModal = ({show, photo, toggleModal}) => {
  if (show) {
    return (
      <div className="full-photo-modal fade" onClick={() => { toggleModal() }}>
        <img className="photo-modal-content"
          src={photo.url}
          width="100%"
          height="500"
          ></img>
      </div>
    )
  } else {
    return null
  }
}
export default FullscreenModal;
import React from 'react';

const FullscreenModal = ({show, photo, toggleModal, prev, next, index}) => {
  if (show) {
    return (
      <div className="full-photo-modal fade" >
        <a className="prev" onClick={() => { prev(-1) }}>&#10094;</a>
        <img className="photo-modal-content"
          src={photo.url}
          width="100%"
          height="100%"
          onMouseEnter={null}
          onMouseLeave={null}
          onClick={() => { toggleModal() }}
          ></img>
          <a className="next" onClick={() => { next(1) }}>&#10095;</a>
      </div>
    )
  } else {
    return null
  }
}
export default FullscreenModal;
import React from 'react';


const Photo = ({ photo, index, display, prev, next, triggerModal, last }) => {
  if (display(index)) {
    if (index === 0) {
      return (
        <div data-testid="photo" className="photo fade">
          <img
            src={photo.url}
            width="650"
            height="500"
            onClick={() => { triggerModal() }}></img>
          <a data-testid="next" className="next" onClick={() => { next(1) }}>&#10095;</a>
        </div>
      )
    }
    if (index === last) {
      return (
        <div data-testid="photo" className="photo fade">
          <a data-testid="prev" className="prev" onClick={() => { prev(-1) }}>&#10094;</a>
          <img
            src={photo.url}
            width="650"
            height="500"
            onClick={() => { triggerModal() }}></img>
        </div>
      )
    }
    return (
      <div data-testid="photo" className="photo fade">
        <a data-testid="prev" className="prev" onClick={() => { prev(-1) }}>&#10094;</a>
        <img
          src={photo.url}
          width="650"
          height="500"
          onClick={() => { triggerModal() }}></img>
        <a data-testid="next" className="next" onClick={() => { next(1) }}>&#10095;</a>
      </div>
    )
  } else {
    return null;
  }
}
export default Photo;
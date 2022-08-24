import React from 'react';

const Photo = ({photo, index, display, prev, next}) => {
  if (display(index)) {
    return (
      <div className="photo fade">
        <a className="prev" onClick={() => { prev(-1) }}>&#10094;</a>
        <img
          src={photo.url}
          width="768"
          height="384"
          ></img>
        <a className="next" onClick={() => { next(1) }}>&#10095;</a>
      </div>
    )
  } else {
    return null;
  }
}
export default Photo;
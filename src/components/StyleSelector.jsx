import React from 'react';

const StyleSelector = ({style, styles, onClick}) => {
  return (
    <div>
      Style: {style}
    <div> {styles.map((style) => (
    <img
      src={style.photos[0].thumbnail_url}
      width="80"
      height="80"
      onClick={() => {onClick(style)}}/>))}</div>
    </div>
  )
}

export default StyleSelector;
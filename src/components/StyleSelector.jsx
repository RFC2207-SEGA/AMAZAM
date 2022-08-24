import React from 'react';

const StyleSelector = ({styles, onClick}) => {
  return (
    <div> {styles.map((style) => (
    <img
      src={style.photos[0].thumbnail_url}
      width="80"
      height="80"
      onClick={() => {onClick(style)}}/>))}</div>
  )
}

export default StyleSelector;
import React from 'react';

const StyleSelector = ({style, styles, onClick}) => {
  return (
    <div className="style-title">
      Style: {style}
    <div className="styles-holder"> {styles.map((styl, index) => {
      if (styl.name === style) {
        return (
          <img className="style-bubble selected"
          key={index}
          src={styl.photos[0].thumbnail_url}
          width="80"
          height="80"
          onClick={() => {onClick(styl)}}/>)
      } else { return (
          <img className="style-bubble"
          key={index}
          src={styl.photos[0].thumbnail_url}
          width="80"
          height="80"
          onClick={() => {onClick(styl)}}/>)}})}</div>
    </div>
  )
}

export default StyleSelector;
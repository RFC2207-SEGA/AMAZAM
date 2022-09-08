import React from 'react';

function Stars ({ rating }) {

  function getStarsIcons() {
    let ratingToNum = parseFloat(rating)
    let roundedToQtrPct = (Math.round(ratingToNum * 4) / 4).toFixed(2);
    let starsContainer = []
    while (roundedToQtrPct > 0) {
      if (roundedToQtrPct < 1) {
        starsContainer.push(<i className="fa-solid fa-star" style={{width: `${(roundedToQtrPct * 16)}px`, overflow: 'hidden', position: 'absolute'}}></i>)
        roundedToQtrPct = 0;
      } else {
        starsContainer.push(<i className="fa-solid fa-star"></i>)
        roundedToQtrPct--;
      }
    }
    return starsContainer;
  }


  return (
    <span className='stars-component'>
      {getStarsIcons()}
    </span>
  )
}

export default Stars;

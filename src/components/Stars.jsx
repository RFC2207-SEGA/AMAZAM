import React from 'react';

function Stars ({ rating }) {

  var starsUnderlay = [
    <span key={6} className='stars-underlay'>
      <i key={1} className="fa-regular fa-star"></i>
      <i key={2} className="fa-regular fa-star"></i>
      <i key={3} className="fa-regular fa-star"></i>
      <i key={4} className="fa-regular fa-star"></i>
      <i key={5} className="fa-regular fa-star"></i>
    </span>
  ]

  function getStarsIcons() {
    let ratingToNum = parseFloat(rating)
    let roundedToQtrPct = (Math.round(ratingToNum * 4) / 4).toFixed(2);
    let starsOverlay = []
    while (roundedToQtrPct > 0) {
      if (roundedToQtrPct < 1) {
        starsOverlay.push(<i key={roundedToQtrPct} className="fa-solid fa-star" style={{width: `${(roundedToQtrPct * 18)}px`, overflow: 'hidden', position: 'absolute'}}></i>)
        roundedToQtrPct = 0;
      } else {
        starsOverlay.push(<i key={roundedToQtrPct} className="fa-solid fa-star"></i>)
        roundedToQtrPct--;
      }
    }
    return starsOverlay;
  }


  return (
    <span className='stars-component'>
      {starsUnderlay}
      {getStarsIcons()}
    </span>
  )
}

export default Stars;

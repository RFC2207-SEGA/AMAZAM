import React from 'react';

function Stars ({ rating }) {

  var starsUnderlay = [
    <span className='stars-underlay'>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </span>]

  function getStarsIcons() {
    let ratingToNum = parseFloat(rating)
    let roundedToQtrPct = (Math.round(ratingToNum * 4) / 4).toFixed(2);
    let starsOverlay = []
    while (roundedToQtrPct > 0) {
      if (roundedToQtrPct < 1) {
        starsOverlay.push(<i className="fa-solid fa-star" style={{width: `${(roundedToQtrPct * 18)}px`, overflow: 'hidden', position: 'absolute'}}></i>)
        roundedToQtrPct = 0;
      } else {
        starsOverlay.push(<i className="fa-solid fa-star"></i>)
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

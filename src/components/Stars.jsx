import React from 'react';

function Stars ({ rating }) {

  function getStarsIcons() {
    let ratingToNum = parseFloat(2.673)
    let roundedToQtrPct = (Math.round(ratingToNum * 4) / 4).toFixed(2);
    console.log('rounded:', roundedToQtrPct)
    let starsContainer = []
    while (roundedToQtrPct > 0) {
      if (roundedToQtrPct < 1) {
        console.log('fraction:', roundedToQtrPct)
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

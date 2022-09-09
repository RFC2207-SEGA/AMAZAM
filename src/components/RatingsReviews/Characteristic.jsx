import React from 'react';

function Characteristic ({ characteristic, value }) {

  var descriptors = {
    Size: ['Too Small', 'Perfect', 'Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Great'],
    Length: ['Too Short', 'Perfect', 'Too Long'],
    Fit: ['Runs Tight', 'Perfect', 'Runs Big']
  }

  var icon = {
    Length: <i class="fa-solid fa-ruler"></i>,
    Fit: <i class="fa-solid fa-shirt"></i>,
    Comfort: <i class="fa-solid fa-heart"></i>,
    Quality: <i class="fa-solid fa-gem"></i>
  }

  var marginLeftPercentage = parseFloat(value) / 5 * 100;

  return (
    <div>
      <p>{icon[characteristic]}  {characteristic}</p>
      <div className='range-bar-container'>
        <div className="range-bar"></div>
        <div className="triangle-down" data-testid="triangleDown" style={{'marginLeft': `${marginLeftPercentage}%`}}></div>
      </div>
      <br></br>
      <div className='characteristics-desc'>
        {descriptors[characteristic].map((values, index) =>
          <span key={index}>{values}</span>
        )}
      </div>
    </div>
  )
}

export default Characteristic;
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

  var marginLeftPercentage = parseInt(value) / 5 * 100;

  return (
    <div>
      <p>{characteristic}</p>
      <div className='rangeBarContainer'>
        <div className="rangeBar"></div>
        <div className="triangleDown" data-testid="triangleDown" style={{'marginLeft': `${marginLeftPercentage}%`}}></div>
      </div>
      <br></br>
      <div className='characteristicsDesc'>
        {descriptors[characteristic].map(values =>
          <span>{values}</span>
        )}
      </div>
    </div>
  )
}

export default Characteristic;
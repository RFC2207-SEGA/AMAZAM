import React from "react";


function CharItem ({ characteristic, value }) {

  var descriptors = {
    Size: ['Too Small', 'Perfect', 'Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Uncomfortable', 'Very Comfortable'],
    Quality: ['Poor', 'Great' ],
    Length: ['Too Short', 'Perfect', 'Too Long'],
    Fit: ['Too Short', 'Perfect', 'Too Long']
  }

  var marginLeftPercentage = parseInt(value.value) / 5 * 100;

  return (
    <div>
      <p>{characteristic}</p>
      <div className='rangeBarContainer'>
        <div className="rangeBar"></div>
        <div className="triangleDown" style={{'marginLeft': `${marginLeftPercentage}%`}}></div>
      </div>
      <br></br>
      <div className='characteristicsDesc'>
        {descriptors[characteristic].map((values, index) =>
          <span>{values}</span>
        )}
      </div>
    </div>
  )
}

export default CharItem;
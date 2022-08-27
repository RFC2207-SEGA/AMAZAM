import React from "react";

function ProductBreakdown ({ meta }) {

  var sizePointer = parseInt(meta.characteristics.Size.value)/5 * 100
  var widthPointer = parseInt(meta.characteristics.Width.value)/5 * 100
  var comfortPointer = parseInt(meta.characteristics.Comfort.value)/5 * 100
  var sizePointer = parseInt(meta.characteristics.Size.value)/5 * 100
  var sizePointer = parseInt(meta.characteristics.Size.value)/5 * 100

  return (
    <>
      <p>Size</p>
        <div className='rangeBarContainer'>
          <div className="rangeBar"></div>
          <div className="triangleDown" style={{'margin-left': `${sizePointer}%`}}></div>
        </div>
        <br></br>
        <div className='characteristicsDesc'>
          <span>Too Small</span> <span>Perfect</span> <span>Too Big</span>
        </div>

      <p>Width</p>
        <div className='rangeBarContainer'>
          <div className="rangeBar"></div>
          <div className="triangleDown" style={{'margin-left': `${widthPointer}%`}}></div>
        </div>
        <br></br>
        <div className='characteristicsDesc'>
          <span>Too Narrow</span> <span>Perfect</span> <span>Too Wide</span>
        </div>

        <p>Comfort</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'margin-left': `${comfortPointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Uncomfortable</span><span>Very Comfortable</span>
          </div>

        <p>Quality</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'margin-left': `${sizePointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Poor</span> <span>Great</span>
          </div>

        <p>Length</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'margin-left': `${sizePointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Too Short</span> <span>Perfect</span> <span>Too Long</span>
          </div>

        <p>Fit</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'margin-left': `${sizePointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Runs Small</span>  <span>Runs Large</span>
          </div>
    </>
  )
}

export default ProductBreakdown;
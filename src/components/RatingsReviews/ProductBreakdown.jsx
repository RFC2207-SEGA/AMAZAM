import React from "react";

function ProductBreakdown ({ meta }) {

    // sizePointer: parseInt(meta.characteristics.Size.value) / 5 * 100
    // widthPointer: parseInt(meta.characteristics.Width.value) / 5 * 100,
    // comfortPointer: parseInt(meta.characteristics.Comfort.value) / 5 * 100,
    // qualityPointer: parseInt(meta.characteristics.Quality.value) / 5 * 100,
    // lengthPointer: parseInt(meta.characteristics.Length.value) / 5 * 100,
    // fitPointer: parseInt(meta.characteristics.Fit.value) / 5 * 100

  // var sizePointer: parseInt(meta.characteristics.Size.value) / 5 * 100
  // var widthPointer: parseInt(meta.characteristics.Width.value) / 5 * 100
  // var comfortPointer: parseInt(meta.characteristics['Comfort']['value']) / 5 * 100
  // var qualityPointer: parseInt(meta.characteristics.Quality.value) / 5 * 100
  // var lengthPointer: parseInt(meta.characteristics.Length.value) / 5 * 100
  // var fitPointer: parseInt(meta.characteristics.Fit.value) / 5 * 100


  return (
    <div className='productBreakdownMain'>
        {console.log('meta.characteristics', meta.characteristics)}
        {/* {console.log('meta in product breakdown', meta.characteristics.Comfort.value)} */}
      {/* <p>Size</p>
        <div className='rangeBarContainer'>
          <div className="rangeBar"></div>
          <div className="triangleDown" style={{'marginLeft': `${sizePointer}%`}}></div>
        </div>
        <br></br>
        <div className='characteristicsDesc'>
          <span>Too Small</span> <span>Perfect</span> <span>Too Big</span>
        </div>

      <p>Width</p>
        <div className='rangeBarContainer'>
          <div className="rangeBar"></div>
          <div className="triangleDown" style={{'marginLeft': `${widthPointer}%`}}></div>
        </div>
        <br></br>
        <div className='characteristicsDesc'>
          <span>Too Narrow</span> <span>Perfect</span> <span>Too Wide</span>
        </div> */}

        {/* <p>Comfort</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'marginLeft': `${comfortPointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Uncomfortable</span><span>Very Comfortable</span>
          </div> */}

        {/* <p>Quality</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'marginLeft': `${qualityPointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Poor</span> <span>Great</span>
          </div>

        <p>Length</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'marginLeft': `${lengthPointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Too Short</span> <span>Perfect</span> <span>Too Long</span>
          </div>

        <p>Fit</p>
          <div className='rangeBarContainer'>
            <div className="rangeBar"></div>
            <div className="triangleDown" style={{'marginLeft': `${fitPointer}%`}}></div>
          </div>
          <br></br>
          <div className='characteristicsDesc'>
          <span>Runs Small</span>  <span>Runs Large</span>
          </div> */}
    </div>
  )
}

export default ProductBreakdown;
import React from "react";

function ProductBreakdown ({ meta }) {
  return (
    <>
      <h3>Size</h3>
        <span>Too Small</span> <span>Perfect</span> <span>Too Big</span>
      <h3>Width</h3>
        <span>Too Narrow</span> <span>Perfect</span> <span>Too Wide</span>
      <h3>Comfort</h3>
        <span>Uncofortable</span><span>Very Comfortable</span>
      <h3>Quality</h3>
        <span>Poor</span> <span>Great</span>
      <h3>Length</h3>
        <span>Too Short</span> <span>Perfect</span> <span>Too Long</span>
      <h3>Fit</h3>
        <span>Runs Small</span>  <span>Runs Large</span>
    </>
  )
}

export default ProductBreakdown;
import React from "react";
import CharItem from './CharItem.jsx'

function ProductBreakdown ({ meta }) {

  function iterateMetaChars() {
    if (meta.characteristics !== undefined) {
      return Object.entries(meta.characteristics).map(([characteristic, value], index) =>
        <CharItem characteristic={characteristic} value={value} key={index}/>
      )
    }
  }

  return (
    <div className='productBreakdownMain'>{iterateMetaChars()}</div>
  )
}

export default ProductBreakdown;
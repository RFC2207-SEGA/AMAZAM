import React from 'react';
import Characteristic from './Characteristic.jsx'

function ProductBreakdown ({ reviewMeta }) {

  function createCharacteristicRange() {
    if (reviewMeta.characteristics !== undefined) {
      return Object.entries(reviewMeta.characteristics).map(([characteristic, values]) =>
        <Characteristic characteristic={characteristic} value={values.value} key={values.id}/>
      )
    }
  }

  return (
    <div className='product-breakdown-main'>{createCharacteristicRange()}</div>
  )
}

export default ProductBreakdown;
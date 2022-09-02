import React from 'react';
import Characteristic from './Characteristic.jsx'

function ProductBreakdown ({ meta }) {

  function createCharacteristicRange() {
    if (meta.characteristics !== undefined) {
      return Object.entries(meta.characteristics).map(([characteristic, values]) =>
        <Characteristic characteristic={characteristic} value={values.value} key={values.id}/>
      )
    }
  }

  return (
    <div className='product-breakdown-main'>{createCharacteristicRange()}</div>
  )
}

export default ProductBreakdown;
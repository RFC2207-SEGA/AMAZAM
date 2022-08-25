import React from 'react';

const OverviewSelectors = ({pickSize, sizes, quantities}) => {
  return (
    <div> Size:
      <select onChange={(e) => {pickSize(e)}}>{sizes.map((size) => (
        <option value={size}>{size}</option>
      ))}
      </select>
      Quantity:
      <select>{quantities.map((quantity) => (
        <option value={quantity}>{quantity}</option>
      ))}
      </select>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
export default OverviewSelectors;
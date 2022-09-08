import React from 'react';

const OverviewSelectors = ({ pickSize, sizes, currentSize, quantities, addToCart, pickQuantity }) => {
  if (quantities.length > 0) {
    return (
      <div>
      <div className="overview-selectors">
      <div></div>
        <select data-testid="size-selector" className="overview-dropdown" onChange={(e) => { pickSize(e) }}>
          <option value={`${currentSize}`}> {currentSize} </option>
          {sizes.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
        <div></div>
        <select className="overview-dropdown" onChange={(e) => { pickQuantity(e) }}>
          <option value="1" default> 1 </option>
          {quantities.slice(1).map((quantity) => (
            <option value={quantity}>{quantity}</option>
          ))}
        </select>
      </div>
        <div className="overview-buttons">
          <button data-testid="cartbutton" className="cartButton" onClick={() => { addToCart() }}>Add to Cart</button>
          <button className="starButton"><i class="fa-solid fa-star"></i></button>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
      <div data-testid="size-warning" className="size-warning">Please select a size!</div>
      <div className="overview-selectors">
        <div></div>
        <select data-testid="size-selector" className="overview-dropdown" onChange={(e) => { pickSize(e) }}>
          <option value="" disabled selected hidden> Select Size </option>
          {sizes.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
        <div></div>
        <select className="overview-dropdown">
          <option disabled selected hidden value="">OUT OF STOCK</option>
        </select>
        </div>
        <div className="overview-buttons">
          <button className="cartButton" onClick={() => { addToCart() }}>Add to Cart</button>
          <button className="starButton"><i class="fa-solid fa-star"></i></button>
        </div>
      </div>)
  }
}
export default OverviewSelectors;
import React from 'react';
import Stars from './Stars.jsx'

const ProductInfo = ({rating, product, style, onSale, scroll}) => {
  if (onSale) {
    return (
    <ul>
      <li data-testid="placeholder" className="placeholder"> <Stars rating={rating}/> <div data-testid="read-all-reviews" className="read-all-reviews" onClick={() => scroll()}>Read All Reviews</div> </li>
      <li data-testid="product-category" className='product-category'>Category: {product.category}</li>
      <li data-testid="product-name" className='product-name'>{product.name}</li>
      <li data-testid="price" className='price sale'>Price: ${style.original_price - style.sale_price}</li>
      <li data-testid="strikeout" className='strikeout'>{style.original_price}</li>
    </ul>
    )
  } else {
    return (
      <ul>
        <li data-testid="placeholder" className="placeholder"> <Stars rating={rating}/> <div data-testid="read-all-reviews" className="read-all-reviews" onClick={() => scroll()}>Read All Reviews</div>  </li>
        <li data-testid="product-category" className='product-category'>Category: {product.category}</li>
        <li data-testid="product-name" className='product-name'>{product.name}</li>
        <li data-testid="price" className='price'>Price: ${style.original_price}</li>
      </ul>
  )
  }
}
export default ProductInfo;
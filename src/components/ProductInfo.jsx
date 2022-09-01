import React from 'react';

const ProductInfo = ({product, style, onSale}) => {
  if (onSale) {
    return (
    <ul>
      <li data-testid="placeholder" className="placeholder"> Star Component Goes Here! </li>
      <li data-testid="product-category" className='product-category'>Category: {product.category}</li>
      <li data-testid="product-name" className='product-name'>{product.name}</li>
      <li data-testid="price" className='price sale'>Price: ${style.original_price - style.sale_price}</li>
      <li data-testid="strikeout" className='strikeout'>{style.original_price}</li>
    </ul>
    )
  } else {
    return (
      <ul>
        <li data-testid="placeholder" className="placeholder"> Star Component Goes Here! </li>
        <li data-testid="product-category" className='product-category'>Category: {product.category}</li>
        <li data-testid="product-name" className='product-name'>{product.name}</li>
        <li data-testid="price" className='price'>Price: ${style.original_price}</li>
      </ul>
  )
  }
}
export default ProductInfo;
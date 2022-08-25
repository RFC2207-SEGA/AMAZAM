import React from 'react';

const ProductInfo = ({product, style, onSale}) => {
  if (onSale) {
    return (
    <ul>
      <li className="placeholder"> Star Component Goes Here! </li>
      <li className='product-category'>Category: {product.category}</li>
      <li className='product-name'>{product.name}</li>
      <li className='price sale'>Price: ${style.original_price - style.sale_price}</li>
      <li className='strikeout'>{style.original_price}</li>
    </ul>
    )
  } else {
    return (
      <ul>
        <li className="placeholder"> Star Component Goes Here! </li>
        <li className='product-category'>Category: {product.category}</li>
        <li className='product-name'>{product.name}</li>
        <li className='price'>Price: ${style.original_price}</li>
      </ul>
  )
  }
}
export default ProductInfo;
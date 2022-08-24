import React from 'react';

const ProductInfo = ({product, style, onSale}) => {
  if (onSale) {
    return (
    <ul>
      <li className="placeholder"> Star Component Goes Here! </li>
      <li className='product-category'>Category: {product.category}</li>
      <li className='product-name'>{product.name}</li>
      <li className='sale'>Price: {style.original_price - style.sale_price}</li>
      <li className='strikeout'>{style.original_price}</li>
      <li>Product Overview</li>
      <li className="social-links">Social Links:</li>
      <button>Facebook</button><button>Twitter</button><button>Pinterest</button>
    </ul>
    )
  } else {
    return (
      <ul>
        <li className="placeholder"> Star Component Goes Here! </li>
        <li className='product-category'>Category: {product.category}</li>
        <li className='product-name'>{product.name}</li>
        <li>Price: {style.original_price}</li>
        <li>Product Overview</li>
        <li className="social-links">Social Links:</li>
        <button>Facebook</button><button>Twitter</button><button>Pinterest</button>
      </ul>
  )
  }
}
export default ProductInfo;
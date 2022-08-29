import React from 'react';

const RelatedProduct = ({ product, styles, rating, select }) => {
  if (product && styles) {
    var photoUrl = styles.data.results[0].photos[0].thumbnail_url;
    let salesPrice = 0;
    if (styles.data.results[0].sale_price) {
      salesPrice = (styles.data.results[0].original_price - styles.data.results[0].sale_price)
    }
    if (salesPrice !== 0) {
      return (
        <div className="related-product" onClick={() => { select(product) }}>
          <img
            src={photoUrl}
            width="75"
            height="100"></img>
          <div>
            {product.name}
          </div>
          <div className="sale">
            {salesPrice}
          </div>
          <div className="strikeout">
            ${styles.data.results[0].original_price}
          </div>
          <div>
            {rating} stars
          </div>
        </div>
      )
    } else {
      if (photoUrl === null) {
        return (
          <div className="related-product" onClick={() => { select(product) }}>
            <div className="sale"> No
            </div><div className="sale">Preview</div><div className="sale">Available</div>
            <div>
              {product.name}
            </div>
            <div>
              ${styles.data.results[0].original_price}
            </div>
            <div>
              {rating} stars
            </div>
          </div>
        )
      } else return (
        <div className="related-product" onClick={() => { select(product) }}>
          <img
            src={photoUrl}
            width="75"
            height="100"></img>
          <div>
            {product.name}
          </div>
          <div>
            ${styles.data.results[0].original_price}
          </div>
          <div>
            {rating} stars
          </div>
        </div>
      )
    }
  }
  else {
    return null;
  }
}
export default RelatedProduct;
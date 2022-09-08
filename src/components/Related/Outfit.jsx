import React from 'react';

const Outfit = ({ product, styles, rating, select, remove }) => {
  let starRating = []
  for (let i = 0; i < Math.round(rating); i++) {
    starRating.push(<i class="fa-solid fa-star"></i>)
  }
  if (product && styles) {
    var photoUrl = styles.photos[0].thumbnail_url;
    let salesPrice = 0;
    if (styles.sale_price) {
      salesPrice = (styles.original_price - styles.sale_price)
    }
    if (salesPrice !== 0) {
      return (
        <div className="related-product">
          <span><i class="fa-solid fa-x"></i></span>
          <img onClick={() => { select(product) }}
            src={photoUrl}
            width="100"
            height="150"></img>
          <div className="related-name">
            {product.name}
          </div>
          <div className="sale related-price">
            {salesPrice}
          </div>
          <div className="strikeout related-price">
            ${styles.original_price}
          </div>
          <div className="related-rating">
            {starRating}
          </div>
        </div>
      )
    } else {
      if (photoUrl === null) {
        return (
          <div className="related-product">
            <div className="action-button" onClick={() => { remove(product, styles, rating) }}><i class="fa-solid fa-x"></i></div>
            <div className="sale" onClick={() => { select(product) }}> No
            </div><div className="sale" onClick={() => { select(product) }}>Preview</div><div className="sale" onClick={() => { select(product) }}>Available</div>
            <div className="related-name">
              {product.name}
            </div>
            <div className="related-price">
              ${styles.original_price}
            </div>
            <div className="related-rating">
              {starRating}
            </div>
          </div>
        )
      } else return (
        <div className="related-product">
          <div className="action-button" onClick={() => { remove(product, styles, rating) }}><i class="fa-solid fa-x"></i></div>
          <img onClick={() => { select(product) }}
            src={photoUrl}
            width="100"
            height="150"></img>
          <div className="related-name">
            {product.name}
          </div>
          <div className="related-price">
            ${styles.original_price}
          </div>
          <div className="related-rating">
            {starRating}
          </div>
        </div>
      )
    }
  }
  else {
    return null;
  }
}
export default Outfit;
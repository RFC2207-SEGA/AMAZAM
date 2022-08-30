import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
// import App from '../src/index.jsx';
import ProductInfo from '../src/components/ProductInfo.jsx'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Product Info Not On Sale', function () {
  const user = userEvent.setup();

  render(<ProductInfo product={{
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  }} style={{
    "style_id": 1,
    "name": "Forest Green & Black",
    "original_price": "140",
    "sale_price": "0",
    "default?": true,
    "photos": [
      {
        "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        "url": 'placeholderurl'
      },
      {
        "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        "url": "placeholderurl"
      }
    ],
    "skus": {
      "37": {
        "quantity": 8,
        "size": "XS"
      },
      "38": {
        "quantity": 16,
        "size": "S"
      },
      "39": {
        "quantity": 17,
        "size": "M"
      },
    },
  }} onSale={false} />)
  it('should contain the star component', () => {
    expect(screen.getByTestId('placeholder')).toBeInTheDocument()
  });

  it('should contain the product category', () => {
    expect(screen.getByTestId('product-category')).toBeInTheDocument()
  });

  it('should contain the product name', () => {
    expect(screen.getByTestId('product-name')).toBeInTheDocument()
  });

  it('should contain the product price', () => {
    expect(screen.getByTestId('price')).toBeInTheDocument()
  });

  it('should NOT contain the strikeout property', () => {
    expect(screen.queryByTestId('strikeout'),
    ).not.toBeInTheDocument()
  });
});
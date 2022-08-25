import React from 'react';
import Gallery from './Gallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import OverviewSelectors from './OverviewSelectors.jsx';
// import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.pickSize.bind(this)
    this.state = {
      productInfo: [
        {
          "feature": "Sole",
          "value": "Rubber"
        },
        {
          "feature": "Material",
          "value": "FullControlSkin"
        },
      ],
      productStyles: [
        {
          "style_id": 1,
          "name": "Forest Green & Black",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            },
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
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
          }
        },
        {
          "style_id": 2,
          "name": "Desert Brown & Tan",
          "original_price": "140",
          "sale_price": "0",
          "default?": false,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_2_photo_number.jpg"
            }
          ],
          "skus": {
            "37": {
              "quantity": 8,
              "size": "XS"
            },
            "38": {
              "quantity": 10,
              "size": "S"
            },
            "39": {
              "quantity": 17,
              "size": "M"
            },
          }
        }
      ],
      currentStyle: {
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
      },
      onSale: true,
      sizes: [],
      quantities: [],
    }
  }

  //WHEN I MOUNT:
  componentDidMount() {
    //make a get request to the API for the info of current product using this.props.product's id, return the .features property (should be an array)
    //make a get request to the API for the styles, return .results property (should be an array).
    this.onSale();
    this.getSizes();
    return;
  }

  onSale() {
    if (this.state.currentStyle.sale_price === '0') {
      this.setState({ 'onSale': false })
    }
  }

  getSizes() {
    let sizes = [];
    for (var key in this.state.currentStyle.skus) {
      sizes.push(this.state.currentStyle.skus[key].size)
    }
    this.setState({ 'sizes': sizes });
  }

  pickSize(n) {
    let quantities = [];
    for (var key in this.state.currentStyle.skus) {
      if (this.state.currentStyle.skus[key].size === n.target.value) {
        for (let i = 0; i <= this.state.currentStyle.skus[key].quantity; i++) {
          if (i <= 15) {
            quantities.push(i);
          }
        }
      }
    }
    this.setState({ 'quantities': quantities })
  }

  styleSelect(style) {
    this.setState({ 'currentStyle': style })
  }

  render() {
      return (
      <div>
        <div className='overview-container'>
          <div className="gallery-container">
            <Gallery style={this.state.currentStyle} />
          </div>
          <section className="product-info">
            <ProductInfo product={this.props.product} style={this.state.currentStyle} onSale={this.state.onSale}/>
            <StyleSelector style={this.state.currentStyle.name} styles={this.state.productStyles} onClick={this.styleSelect.bind(this)}/>
            <OverviewSelectors pickSize={this.pickSize.bind(this)} sizes={this.state.sizes} quantities={this.state.quantities}/>
            <span className="social-links">
            <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-pinterest"></i></span>
          </section>
        </div>
        <div className="product-description">
          <div className="product-slogan">
            <h1 className="slogan-header">{this.props.product.slogan}:</h1>
            <p>{this.props.product.description}</p>
          </div>
          <div> {this.state.productInfo.map((feat) => (
            <div> {feat.feature}: {feat.value}</div>))}</div>
        </div>
      </div>
      )
    }
}

export default Overview
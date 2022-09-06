import React from 'react';
import Gallery from './Gallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import OverviewSelectors from './OverviewSelectors.jsx';
import Related from "./Related/Related.jsx"
import axios from 'axios';
import {API_KEY} from '../config/config.js';
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
      currentProduct: '',
      currentSize: '',
      photoIndex: 1,
      currentQuant: '',
      rating: '',
    }
  }

  //WHEN I MOUNT:
  componentDidUpdate() {
    if (this.props.product.id !== this.state.currentProduct) {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${this.props.product.id}`,
      {headers: {'Authorization': `${API_KEY}`}, params: { product_id: this.props.product.id}})
        .then((productInfo) => {
          this.setState({ 'productInfo': productInfo.data.features, 'currentProduct': this.props.product.id })
        })
        .then(() => {
          return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${this.props.product.id}/styles`, {headers: {'Authorization': `${API_KEY}`},
          params: { product_id: this.props.product.id}})
        })
        .then((productStyles) => {
          let sizes = [];
          for (var key in productStyles.data.results[0].skus) {
            sizes.push(productStyles.data.results[0].skus[key].size)
          }
          return this.setState({ 'productStyles': productStyles.data.results, 'currentStyle': productStyles.data.results[0], 'sizes': sizes})
        })
        .then(() => {
          let rating;
          var average = 0;
          var numOfKeys = 0;
          for (var key in this.props.meta.ratings) {
            average += (key * this.props.meta.ratings[key])
            numOfKeys += parseInt(this.props.meta.ratings[key]);
          }
          rating = (average / numOfKeys).toFixed(2)
          this.setState({ 'rating': rating })
          this.onSale();
          return;
        })
    }
  }

  addToCart() {
    let currentSku;
    if (this.state.currentSize.length === 0) {
      alert('Please select a size!')
      return;
    }
    if (this.state.currentQuant.length === 0) {
      alert('Please select a quantity!')
      return;
    }
    else for (var key in this.state.currentStyle.skus) {
      if (this.state.currentStyle.skus[key].size === this.state.currentSize) {
        console.log('key: ', key )
        currentSku = key;
      }
    }
    if (currentSku) {
      return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart`,
      { sku_id: currentSku },  { headers: {'Authorization': `${API_KEY}`}})
    }
    return;
  }

  onSale() {
    if (this.state.currentStyle.sale_price === '0') {
      this.setState({ 'onSale': false })
    }
  }

  pickSize(n) {
    n.preventDefault();
    let quantities = [];
    for (var key in this.state.currentStyle.skus) {
      if (this.state.currentStyle.skus[key].size === n.target.value) {
        for (let i = 1; i <= this.state.currentStyle.skus[key].quantity; i++) {
          if (i <= 15) {
            quantities.push(i);
          }
        }
      }
    }
    this.setState({ 'currentSize': n.target.value, 'quantities': quantities, 'currentQuant': 1 })
  }

  pickQuantity(n) {
    n.preventDefault();
    this.setState({ 'currentQuant': n.target.value })
  }

  styleSelect(style) {
    this.setState({ 'currentStyle': style, 'photoIndex': 1 })
  }

  movePhoto(n) {
    let destination = this.state.photoIndex += n;
    if (destination >= 1 && destination <= this.state.currentStyle.photos.length) {
      this.setState({ 'photoIndex': destination })
    }
  }

  render() {
      return (
      <div>
        <div className='overview-container'>
          <div className="gallery-container">
            <Gallery style={this.state.currentStyle} index={this.state.photoIndex} movePhoto={this.movePhoto.bind(this)}/>
          </div>
          <section className="product-info">
            <ProductInfo rating={this.state.rating} product={this.props.product} style={this.state.currentStyle} onSale={this.state.onSale} scroll={this.props.scroll}/>
            <StyleSelector style={this.state.currentStyle.name} styles={this.state.productStyles} onClick={this.styleSelect.bind(this)}/>
            <OverviewSelectors pickSize={this.pickSize.bind(this)} sizes={this.state.sizes} currentSize={this.state.currentSize} quantities={this.state.quantities} addToCart={this.addToCart.bind(this)} pickQuantity={this.pickQuantity.bind(this)}/>
            <span className="social-links">
            <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-pinterest"></i></span>
          </section>
        </div>
        <div className="product-description">
          <div data-testid="product-slogan" className="product-slogan">
            <h1 className="slogan-header">{this.props.product.slogan}:</h1>
            <p>{this.props.product.description}</p>
          </div>
          <div> {this.state.productInfo.map((feat) => (
            <div className="product-features"> <i class="fa-solid fa-check"></i> {feat.feature}: {feat.value}</div>))}</div>
        </div>
        <div>
        <Related product={this.props.product} select={this.props.select} style={this.state.currentStyle} info={this.state.productInfo} mainRating={this.state.rating}/>
        </div>
      </div>
      )
    }
}

export default Overview;
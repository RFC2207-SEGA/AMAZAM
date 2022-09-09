import React from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config.js';
import RelatedProduct from './RelatedProduct.jsx';
import Outfit from './Outfit.jsx';
import ComparisonModal from './ComparisonModal.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: '',
      relatedIds: [],
      relatedProducts: [],
      relatedStyles: [],
      relatedReviews: [],
      myOutfit: [],
      myOutfitStyles: [],
      myOutfitReviews: [],
    }
  }

  componentDidUpdate() {
    if (!this.props.product) {
      return;
    }
    if (this.state.productId !== this.props.product.id) {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${this.props.product.id}/related`,
        { headers: { 'Authorization': `${API_KEY}` }, params: { 'product_id': this.props.product.id } })
        .then((data) => {
          this.setState({ 'productId': this.props.product.id, 'relatedIds': data.data, })
          // console.log(data)
          return (data.data)
        })
        .then((ids) => {
          var promiseIds = [];
          for (let i = 0; i < ids.length; i++) {
            promiseIds.push(axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${ids[i]}`,
              { headers: { 'Authorization': `${API_KEY}` }, params: { 'product_id': ids[i] } }))
          }
          return Promise.all(promiseIds)
        })
        .then((data) => {
          // console.log(data)
          for (let i = 0; i < data.length; i++) {
            var currentId = data[i].data.id
            for (let j = i + 1; j < data.length; j++) {
              if (currentId === data[j].data.id) {
                data.splice(j, 1);
              }
            }
          }
          this.setState({ 'relatedProducts': data })
          return (data)
        })
        .then((ids) => {
          var promiseIds = [];
          for (let i = 0; i < ids.length; i++) {
            promiseIds.push(axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${ids[i].data.id}/styles`, {
              headers: { 'Authorization': `${API_KEY}` },
              params: { product_id: ids[i].data.id }
            }))
          }
          return Promise.all(promiseIds)
        })
        .then((stylesData) => {
          this.setState({ 'relatedStyles': stylesData })
        })
        .then(() => {
          var promiseIds = [];
          for (let i = 0; i < this.state.relatedProducts.length; i++) {
            promiseIds.push(axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta`, {
              headers: { 'Authorization': `${API_KEY}` },
              params: { product_id: this.state.relatedProducts[i].data.id }
            }))
          }
          return Promise.all(promiseIds);
        })
        .then((data) => {
          var ratings = [];
          for (let q = 0; q < data.length; q++) {
            let datum = data[q]
            var average = 0;
            var numOfKeys = 0;
            for (var key in datum.data.ratings) {
              average += (key * datum.data.ratings[key])
              numOfKeys += parseInt(datum.data.ratings[key]);
            }
            ratings.push((average / numOfKeys).toFixed(2))
          }
          this.setState({ 'relatedReviews': ratings })
        })
    }
  }

  addMainToFit() {
    for (let j = 0; j < this.state.myOutfit.length; j++) {
      if (this.state.myOutfit[j].id === this.props.product.id) {
        return;
      }
    }
    return this.setState({ 'myOutfit': [...this.state.myOutfit, this.props.product], 'myOutfitStyles': [...this.state.myOutfitStyles, this.props.style], 'myOutfitReviews': [...this.state.myOutfitReviews, this.props.mainRating] })
  }

  removeFit( product, styles, rating ) {
    var oSplicePoint = this.state.myOutfit.indexOf(product)
    var sSplicePoint = this.state.myOutfitStyles.indexOf(styles)
    var rSplicePoint = this.state.myOutfitReviews.indexOf(rating)
    this.state.myOutfit.splice(oSplicePoint, 1)
    this.state.myOutfitStyles.splice(sSplicePoint, 1)
    this.state.myOutfitReviews.splice(rSplicePoint, 1)
    this.setState({ 'myOutfit': this.state.myOutfit, 'myOutfitStyle': this.state.myOutfitStyles, 'myOutfitReviews': this.state.myOutfitReviews })
  }

  render() {
    if (this.state.relatedProducts.length > 0) {
      return (
        <div className="related-widget">
          <div data-testid="related-streamer" className="related-streamer"> Related Products </div>
          <div className="related-product-container">
            {this.state.relatedProducts.map((product, index) => (
              <RelatedProduct product={product.data} styles={this.state.relatedStyles[index]} rating={this.state.relatedReviews[index]} select={this.props.select} mainProduct={this.props.product} mainInfo={this.props.info}/>
            ))}
          </div>
          <div className="related-streamer"> My Outfit </div>
          <div className="outfit-container">
            <div className="empty-outfit-card" onClick={this.addMainToFit.bind(this)}>
              <div className="action-button"><i class="fa-solid fa-shirt"></i></div>
              <div className="sale"> +
              </div><div>Add to</div><div>Outfit</div>
              <div className="related-name">
              </div>
              <div className="related-price">
              </div>
              <div className="related-rating">
              </div>
            </div>
            {this.state.myOutfit.map((product, index) => (
              <Outfit product={product} styles={this.state.myOutfitStyles[index]} rating={this.state.myOutfitReviews[index]} select={this.props.select} remove={this.removeFit.bind(this)} />
            ))}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
export default Related;
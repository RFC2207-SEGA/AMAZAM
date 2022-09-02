import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComparison: false,
    }
  }

  toggleModal() {
    this.setState({ 'showComparison': !this.state.showComparison })
  }

  render() {
    if (this.props.product && this.props.styles) {
      var photoUrl = this.props.styles.data.results[0].photos[0].thumbnail_url;
      let salesPrice = 0;
      if (this.props.styles.data.results[0].sale_price) {
        salesPrice = (this.props.styles.data.results[0].original_price - this.props.styles.data.results[0].sale_price)
      }
      if (salesPrice !== 0) {
        return (
          <div className="related-product" onClick={() => { this.props.select(this.props.product) }}>
            <span><i class="fa-solid fa-star"></i></span>
            <img
              src={photoUrl}
              width="75"
              height="100"></img>
            <div className="related-name">
              {this.props.product.name}
            </div>
            <div className="sale related-price">
              {salesPrice}
            </div>
            <div className="strikeout related-price">
              ${this.props.styles.data.results[0].original_price}
            </div>
            <div className="related-rating">
              {this.props.rating} stars
            </div>
          </div>
        )
      } else {
        if (photoUrl === null) {
          return (
            <div className="related-product">
              <div className="comparison-modal-container">
                <ComparisonModal show={this.state.showComparison} mainProduct={this.props.mainProduct} comparedProduct={this.props.product} mainInfo={this.props.mainInfo} toggle={this.toggleModal.bind(this)}/>
              </div>
              <div className="action-button" onClick={this.toggleModal.bind(this)}><i class="fa-solid fa-star"></i></div>
              <div className="sale" onClick={() => { this.props.select(this.props.product) }}> No
              </div>
              <div className="sale" onClick={() => { this.props.select(this.props.product) }}>Preview</div>
              <div className="sale" onClick={() => { this.props.select(this.props.product) }}>Available</div>
              <div className="related-name" >
                {this.props.product.name}
              </div>
              <div className="related-price">
                ${this.props.styles.data.results[0].original_price}
              </div>
              <div className="related-rating">
                {this.props.rating} stars
              </div>
            </div>
          )
        } else {
          return (
          <div className="related-product">
            <div className="comparison-modal-container">
              <ComparisonModal show={this.state.showComparison} mainProduct={this.props.mainProduct} comparedProduct={this.props.product} mainInfo={this.props.mainInfo} toggle={this.toggleModal.bind(this)}/>
            </div>
            <div className="action-button" onClick={this.toggleModal.bind(this)}><i class="fa-solid fa-star"></i></div>
            <img onClick={() => { this.props.select(this.props.product) }}
              src={photoUrl}
              width="75"
              height="100"></img>
            <div className="related-name">
              {this.props.product.name}
            </div>
            <div className="related-price">
              ${this.props.styles.data.results[0].original_price}
            </div>
            <div className="related-rating">
              {this.props.rating} stars
            </div>
          </div>
        )
      }
    }
    return null;
  }
}
}
export default RelatedProduct;
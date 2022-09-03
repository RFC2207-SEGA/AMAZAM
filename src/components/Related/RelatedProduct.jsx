import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import RelatedCarousel from './RelatedCarousel.jsx';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComparison: false,
      relatedShow: false,
      photoIndex: 1,
    }
  }

  toggleModal() {
    this.setState({ 'showComparison': !this.state.showComparison })
  }

  toggleCarousel() {
    this.setState({ 'relatedShow': !this.state.relatedShow })
  }

  changePhoto(n) {
    let destination = this.state.photoIndex += n;
    if (destination >= 1 && destination <= this.props.styles.data.results[0].photos.length) {
      this.setState({ 'photoIndex': destination })
    }
  }

  moveProduct() {
    this.setState({ 'photoIndex': 1 })
    this.props.select( this.props.product )
  }

  calculateStars(rating) {
    let starRating = []
    for (let i = 0; i < Math.round(rating); i++) {
      starRating.push(<i class="fa-solid fa-star"></i>)
    }
    return starRating
  }

  render() {
    if (this.props.product && this.props.styles) {
      var photoUrl = this.props.styles.data.results[0].photos[this.state.photoIndex - 1].thumbnail_url;
      let salesPrice = 0;
      if (this.props.styles.data.results[0].sale_price) {
        salesPrice = (this.props.styles.data.results[0].original_price - this.props.styles.data.results[0].sale_price)
      }
      if (salesPrice !== 0) {
        return (
          <div className="related-product" onClick={() => { this.props.select(this.props.product) }}>
            <div className="comparison-modal-container">
              <ComparisonModal show={this.state.showComparison} mainProduct={this.props.mainProduct} comparedProduct={this.props.product} mainInfo={this.props.mainInfo} toggle={this.toggleModal.bind(this)} />
            </div>
            <div className="action-button" onClick={this.toggleModal.bind(this)}><i class="fa-solid fa-star"></i></div>
            <img
              src={photoUrl}
              width="100"
              height="150"></img>
            <RelatedCarousel show={this.state.relatedShow} photos={this.props.styles.data.results[0].photos} />
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
              {this.calculateStars(this.props.rating)}
            </div>
          </div>
        )
      } else {
        if (photoUrl === null) {
          return null;
          // return (
          //   <div className="related-product">
          //     <div className="comparison-modal-container">
          //       <ComparisonModal show={this.state.showComparison} mainProduct={this.props.mainProduct} comparedProduct={this.props.product} mainInfo={this.props.mainInfo} toggle={this.toggleModal.bind(this)} />
          //     </div>
          //     <div className="action-button" onClick={this.toggleModal.bind(this)}><i class="fa-solid fa-star"></i></div>
          //     <div className="sale" onClick={() => { this.props.select(this.props.product) }}> No
          //     </div>
          //     <div className="sale" onClick={() => { this.props.select(this.props.product) }}>Preview</div>
          //     <div className="sale" onClick={() => { this.props.select(this.props.product) }}>Available</div>
          //     <div className="related-name" >
          //       {this.props.product.name}
          //     </div>
          //     <div className="related-price">
          //       ${this.props.styles.data.results[0].original_price}
          //     </div>
          //     <div className="related-rating">
          //       {this.calculateStars(this.props.rating)}
          //     </div>
          //   </div>
          // )
        } else {
          return (
            <div className="related-product" onMouseEnter={this.toggleCarousel.bind(this)} onMouseLeave={this.toggleCarousel.bind(this)}>
              <div className="comparison-modal-container">
                <ComparisonModal show={this.state.showComparison} mainProduct={this.props.mainProduct} comparedProduct={this.props.product} mainInfo={this.props.mainInfo} toggle={this.toggleModal.bind(this)} />
              </div>
              <div className="action-button" onClick={this.toggleModal.bind(this)}><i class="fa-solid fa-star"></i></div>
              <img onClick={this.moveProduct.bind(this)}
                src={photoUrl}
                width="100"
                height="150"></img>
              <RelatedCarousel show={this.state.relatedShow} photos={this.props.styles.data.results[0].photos} index={this.state.photoIndex - 1} changePhoto={this.changePhoto.bind(this)} />
              <div className="related-name">
                {this.props.product.name}
              </div>
              <div className="related-price">
                ${this.props.styles.data.results[0].original_price}
              </div>
              <div className="related-rating">
                {this.calculateStars(this.props.rating)}
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
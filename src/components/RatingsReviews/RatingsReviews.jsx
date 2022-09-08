import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import { API_KEY } from  '../../../src/config/config.js';

const axios = require('axios');

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      sort: 'relevant',
      showAddReviewModal: false,
      reviewsToDiplay: 2
    }
    this.handleSort = this.handleSort.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.setNumReviewsToDisplay = this.setNumReviewsToDisplay.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
        headers: {'Authorization': `${API_KEY}`},
        params: {
          count: 50,
          // page: 1,
          product_id: this.props.product.id,
          sort: 'relevant'
        }})
      .then((res) => {
        this.setState({reviews: res.data.results})
      })
      .catch((err) =>
        console.log(err));
    }
  }

  handleSort(e) {
    e.preventDefault();
    let sortMethod = e.target.value
    this.setState({ sort: sortMethod });
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {'Authorization': `${API_KEY}`},
      params: {
        // count: 10,
        product_id: this.props.product.id,
        sort: sortMethod
      }})
    .then((res) => {
      this.setState({ reviews: res.data.results })
    })
    .catch((err) =>
      console.log(err));
  }

  toggleReviewModal() {
    this.setState({ showAddReviewModal: !this.state.showAddReviewModal })
  }

  setNumReviewsToDisplay() {
    if (this.state.reviewsToDiplay >= 2 && this.state.reviewsToDiplay < this.state.reviews.length) {
      return <button onClick={(e) => {
        e.preventDefault()
        this.setState({reviewsToDiplay: this.state.reviewsToDiplay + 2})
      }}
      > More Reviews </button>
    }
  }


  render() {
    return (
      <div id='primary-ratings-and-reviews-widget-container'>
        <div className='reviews-ratings-hdr'>Ratings &amp; Reviews</div>

        <div className='reviews-ratings'>
          <div className='breakdowns'>
            <div><RatingBreakdown reviewMeta={this.props.reviewMeta}/></div>
            <div><ProductBreakdown reviewMeta={this.props.reviewMeta}/></div>
          </div>

          <div className='reviews-list-container'>
            <div className='review-list-hdr'>
              <span>{`${this.state.reviewsToDiplay} reviews, sorted by `}</span>
              <span>
                <select onChange={this.handleSort}>
                  <option value='relevant'>Relevance</option>
                  <option value='helpful'>Helpfulness</option>
                  <option value='newest'>Newest</option>
                </select>
              </span>
            </div>

            <ReviewsList
              reviews={this.state.reviews.slice(0, this.state.reviewsToDiplay)}/>


            <div className='footer-btns'>
              {this.setNumReviewsToDisplay()}
              <button onClick={this.toggleReviewModal}>Add A Review</button>
              <div><AddReview
                toggleReviewModal={this.toggleReviewModal}
                showAddReviewModal={this.state.showAddReviewModal}
                reviewMeta={this.props.reviewMeta}
                product={this.props.product}/>
              </div>
            </div>

            </div>
        </div>
      </div>

    )
  }
}

export default RatingsReviews;


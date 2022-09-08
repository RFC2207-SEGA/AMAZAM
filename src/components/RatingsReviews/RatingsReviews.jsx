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
      showAddReviewModal: false
    }
    this.handleSort = this.handleSort.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
        headers: {'Authorization': `${API_KEY}`},
        params: {
          count: 2,
          page: 1,
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
        count: 10,
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

  render() {
    return (
      <div ref={this.props.ref} id='primary-ratings-and-reviews-widget-container'>
        <div className='reviews-ratings-hdr'>Ratings &amp; Reviews</div>

        <div className='reviews-ratings'>
          <div className='breakdowns'>
            <div><RatingBreakdown reviewMeta={this.props.reviewMeta}/></div>
            <div><ProductBreakdown reviewMeta={this.props.reviewMeta}/></div>
          </div>

          <div className='reviews-list'>
            <span>{`${this.state.reviews.length} reviews, sorted by `}</span>
            <span>
              <select onChange={this.handleSort}>
                <option value='relevant'>Relevance</option>
                <option value='helpful'>Helpfulness</option>
                <option value='newest'>Newest</option>
              </select>
            </span>
            <ReviewsList reviews={this.state.reviews} />


            <div className='footer-btns'>
              <button>More Reviews</button>
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
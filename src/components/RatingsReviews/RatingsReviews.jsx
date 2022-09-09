import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import {handleInteractions} from '../../utils.js';
import { API_KEY } from  '../../../src/config/config.js';

const axios = require('axios');

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.ratingsFiltersStatus = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }

    this.allReviews = []

    this.state = {
      reviews: [],
      sort: 'relevant',
      showAddReviewModal: false,
      reviewsToDiplay: 2
    }
    this.handleSort = this.handleSort.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.setNumReviewsToDisplay = this.setNumReviewsToDisplay.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
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
        this.allReviews = res.data.results
      })
      .catch((err) =>
        console.log(err));
    }
  }

  handleSort(e) {
    handleInteractions(e, 'Reviews');
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
      console.log('resorted reviews!')
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
      return <button className='ratings-reviews-btn' onClick={(e) => {
        e.preventDefault()
        this.setState({reviewsToDiplay: this.state.reviewsToDiplay + 2})
      }}
      > More Reviews </button>
    }
  }

  filterReviews(key) {
    this.ratingsFiltersStatus[key] = !this.ratingsFiltersStatus[key]
    var filteredReviews = this.allReviews.filter(review => {
      return this.ratingsFiltersStatus[review.rating]
    })
    this.setState({reviews: filteredReviews, reviewsToDiplay: filteredReviews.length})

    var allAreFalse = Object.values(this.ratingsFiltersStatus).every(value => {
      return value === false
    })

    if (allAreFalse) {
      this.setState({reviews: this.allReviews, reviewsToDiplay: this.allReviews.length})
    }
  }



  render() {
    return (
      <div ref={this.props.ref} id='primary-ratings-and-reviews-widget-container'>
        <div className='reviews-ratings-hdr'>Ratings &amp; Reviews</div>

        <div className='reviews-ratings'>
          <div className='breakdowns'>
            <div><RatingBreakdown
              reviewMeta={this.props.reviewMeta}
              filterReviews={this.filterReviews}/>
            </div>
            <div><ProductBreakdown reviewMeta={this.props.reviewMeta}/></div>
          </div>

          <div className='reviews-list-container'>
            <div className='review-list-hdr'>
              <span className='reviews-hrd-sort-text'>{`${this.state.reviewsToDiplay} review(s), sorted by `}</span>
              <span>
                <select className='reviews-sorting-dropdown' onChange={this.handleSort}>
                  <option value='relevant'>Relevance</option>
                  <option value='helpful'>Helpfulness</option>
                  <option value='newest'>Newest</option>
                </select>
              </span>
            </div>

            <ReviewsList
              reviews={this.state.reviews.slice(0, this.state.reviewsToDiplay)}
              reviewsToDiplay={this.state.reviewsToDiplay}/>

            <div className='footer-btns'>
              {this.setNumReviewsToDisplay()}
              <button className='ratings-reviews-btn' onClick={this.toggleReviewModal}>Add A Review</button>
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


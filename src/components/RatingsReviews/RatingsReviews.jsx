import React from 'react'
import axios from 'axios'
import ReviewsList from './ReviewsList.jsx'
import AddReview from './AddReview.jsx'
import RatingBreakdown from './RatingBreakdown.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import { handleInteractions } from '../../utils.js'

const { API_KEY } = process.env

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.allReviews = []
    this.ratingsFiltersStatusTemp = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
    this.state = {
      reviews: [],
      sort: 'relevant',
      showAddReviewModal: false,
      reviewsToDiplay: 2,
      ratingsFiltersStatus: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
      }
    }
    this.handleSort = this.handleSort.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.setNumReviewsToDisplay = this.setNumReviewsToDisplay.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.resetRatingsFilter = this.resetRatingsFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
        headers: { 'Authorization': `${API_KEY}` },
        params: {
          count: 50,
          // page: 1,
          product_id: this.props.product.id,
          sort: 'relevant'
        }
      })
        .then((res) => {
          this.setState({ reviews: res.data.results })
          this.allReviews = res.data.results
        })
        .catch((err) =>
          console.log(err));
    }
  }

  handleSort(e) {
    // handleInteractions(e, 'Reviews');
    e.preventDefault();
    let sortMethod = e.target.value
    this.setState({ sort: sortMethod })
    if (sortMethod === 'relevant') {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
        headers: { 'Authorization': `${API_KEY}` },
        params: {
          count: 50,
          product_id: this.props.product.id,
          sort: sortMethod
        }
      })
        .then((res) => {
          this.setState({ reviews: res.data.results })
          this.allReviews = res.data.results
          return
        })
        .catch((err) =>
          console.log(err))
    }
    if (sortMethod === 'helpfulness') {
      this.allReviews.sort((a, b) => b.helpfulness - a.helpfulness)
    } else if (sortMethod === 'newest') {
      this.allReviews.sort((a, b) => -a.date.localeCompare(b.date))
    } else if (sortMethod === 'oldest') {
      this.allReviews.sort((a, b) => a.date.localeCompare(b.date))
    }
    this.setState({ reviews: this.allReviews })
  }

  toggleReviewModal() {
    this.setState({ showAddReviewModal: !this.state.showAddReviewModal })
  }

  setNumReviewsToDisplay() {
    if (this.state.reviewsToDiplay >= 2 && this.state.reviewsToDiplay < this.state.reviews.length) {
      return (
        <button className='ratings-reviews-btn'
          onClick={(e) => {
            e.preventDefault()
            if (this.state.reviewsToDiplay + 1 === this.state.reviews.length) {
              this.setState({ reviewsToDiplay: this.state.reviewsToDiplay + 1 })
            } else {
              this.setState({ reviewsToDiplay: this.state.reviewsToDiplay + 2 })
            }
          }}>
          More Reviews
        </button>
      )
    }
  }

  filterReviews(key) {
    this.ratingsFiltersStatusTemp[key] = !this.ratingsFiltersStatusTemp[key]
    this.setState({ ratingsFiltersStatus: this.ratingsFiltersStatusTemp })

    let filteredReviews = this.allReviews.filter(review => {
      return this.ratingsFiltersStatusTemp[review.rating]
    })
    this.setState({ reviews: filteredReviews, reviewsToDiplay: filteredReviews.length })

    let allAreFalse = Object.values(this.ratingsFiltersStatusTemp).every(value => {
      return value === false
    })

    if (allAreFalse) {
      this.setState({ reviews: this.allReviews, reviewsToDiplay: this.allReviews.length })
    }
  }

  resetRatingsFilter() {
    const resetFilters = { 0: false, 1: false, 3: false, 4: false, 5: false }
    this.ratingsFiltersStatusTemp = resetFilters
    this.setState({ ratingsFiltersStatus: resetFilters })
  }

  render() {
    return (
      <div ref={this.props.ref} id='primary-ratings-and-reviews-widget-container'>
        <div className='reviews-ratings-hdr'>Ratings &amp; Reviews</div>

        <div className='reviews-ratings'>
          <div className='breakdowns'>
            <div>
              <RatingBreakdown
                reviews={this.allReviews}
                reviewMeta={this.props.reviewMeta}
                filterReviews={this.filterReviews}
                ratingsFiltersStatus={this.state.ratingsFiltersStatus}
                resetRatingsFilter={this.resetRatingsFilter}
              />
            </div>
            <div>
              <ProductBreakdown reviewMeta={this.props.reviewMeta} />
            </div>
          </div>

          <div className='reviews-list-container'>
            <div className='review-list-hdr'>
              <span className='reviews-hrd-sort-text'>{`Showing ${this.state.reviewsToDiplay} ${this.state.reviewsToDiplay === 1 ? 'review' : 'reviews'}, sorted by `}</span>
              <span>
                <select className='reviews-sorting-dropdown' onChange={this.handleSort}>
                  <option value='relevant'>Relevance</option>
                  <option value='helpfulness'>Helpfulness</option>
                  <option value='newest'>Newest</option>
                  <option value='oldest'>Oldest</option>
                </select>
              </span>
            </div>

            <ReviewsList
              reviews={this.state.reviews.slice(0, this.state.reviewsToDiplay)}
              reviewsToDiplay={this.state.reviewsToDiplay} />

            <div className='footer-btns'>
              {this.setNumReviewsToDisplay()}
              <button className='ratings-reviews-btn' onClick={this.toggleReviewModal}>Add A Review</button>
              <div>
                <AddReview
                  toggleReviewModal={this.toggleReviewModal}
                  showAddReviewModal={this.state.showAddReviewModal}
                  reviewMeta={this.props.reviewMeta}
                  product={this.props.product}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default RatingsReviews

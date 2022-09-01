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
      addReviewModal: false
    }
    this.handleSort = this.handleSort.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {'Authorization': `${API_KEY}`},
      params: {
        count: 2,
        page: 1,
        product_id: 66673, // FIXME update to passed-in product_id
        sort: 'relevant'
      }})
    .then((res) => {
      this.setState({reviews: res.data.results})
    })
    .catch((err) =>
      console.log(err));
  }

  handleSort(e) {
    e.preventDefault();
    let sortMethod = e.target.value
    this.setState({ sort: sortMethod });
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {'Authorization': `${API_KEY}`},
      params: {
        count: 10,
        product_id: 66673, // FIXME update to passed-in product_id
        sort: sortMethod
      }})
    .then((res) => {
      this.setState({ reviews: res.data.results })
    })
    .catch((err) =>
      console.log(err));
  }

  toggleReviewModal() {
    this.setState({ addReviewModal: !this.state.addReviewModal })
  }

  render() {
    return (
      <>
      {console.log('props inside ratings&review:', this.props)}
        <div className='ReviewsRatingsHdr'>Ratings &amp; Reviews</div>

        <div className='ReviewsRatings'>
          <div className='Breakdowns'>
            <div className='RatingBreakdown'><RatingBreakdown meta={this.props.meta}/></div>
            <div className='ProductBreakdown'><ProductBreakdown meta={this.props.meta}/></div>
          </div>

          <div className='ReviewsList'>
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
                addReviewModal={this.state.addReviewModal}
                meta={this.props.meta}/>
              </div>
            </div>

            </div>
        </div>
      </>
    )
  }
}

export default RatingsReviews;
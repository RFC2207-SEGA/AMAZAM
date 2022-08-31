import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import {API_KEY} from '/Users/melissagilv/Desktop/SEGA-Project-Atelier/src/config/config.js';
const axios = require('axios');

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      meta: {},
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    // GET reviews data
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {'Authorization': `${API_KEY}`},
      params: {
        count: 10,
        page: 1,
        product_id: 66673, // FIXME update to passed-in product_id
        sort: 'relevant'
      }})
    .then((res) => {
      this.setState({reviews: res.data.results})
      return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
        headers: {'Authorization': `${API_KEY}`},
        params: {product_id: 66673}
      })
    })
    .then((res) => {
      this.setState({ meta: res.data })
      console.log('meta from server:', res.data)
    })
    .catch((err) =>
      console.log(err));
  }


    // This may be replaced by the axios sort param
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

  render() {
    return (
      <>
        <div className='ReviewsRatingsHdr'>Ratings &amp; Reviews</div>

        <div className='ReviewsRatings'>
          <div className='Breakdowns'>
            <div className='RatingBreakdown'><RatingBreakdown meta={this.state.meta}/></div>
            <div className='ProductBreakdown'><ProductBreakdown meta={this.state.meta}/></div>
          </div>

          <div className='ReviewsList'>
            <span>{`${this.state.reviews.length} reviews, sorted by `}</span>
            <span>
              <select onChange={this.handleSort}>
                <option value='relevant'>Relevant</option>
                <option value='helpful'>Helpful</option>
                <option value='newest'>Newest</option>
              </select>
            </span>
            <ReviewsList reviews={this.state.reviews} />
          </div>

        </div>
      </>
    )
  }
}

export default RatingsReviews;